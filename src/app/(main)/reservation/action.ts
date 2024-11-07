"use server";

import { PrismaClient as MysqlPrismaClient } from "@prisma/client";
import dayjs from "dayjs";
import {
  CreateReservationRequest,
  CreateReservationResponse,
  createReservationSchema,
  PageReservationRequest,
  PageReservationResponse,
  pageReservationSchema,
} from "./schema";

const prisma = new MysqlPrismaClient();

export async function createReservation(
  request: CreateReservationRequest
): Promise<CreateReservationResponse> {
  const validated = await createReservationSchema.safeParseAsync(request);

  if (!validated.success) {
    return {
      code: 400,
      message: validated.error.issues[0].message,
    };
  }

  await prisma.reservation.create({
    data: {
      userName: validated.data.name,
      phone: validated.data.phone,
      date: new Date(),
    },
  });

  return {
    code: 200,
    message: "생성하였습니다.",
  };
}

export async function pageReservation(
  request: PageReservationRequest
): Promise<PageReservationResponse> {
  const validated = await pageReservationSchema.safeParseAsync(request);

  if (!validated.success) {
    return {
      code: 400,
      message: validated.error.issues[0].message,
    };
  }

  const { size, page } = validated.data;

  const skip = (page - 1) * size;

  try {
    const data = await prisma.reservation.findMany({
      orderBy: { createdAt: "asc" },
      take: size,
      skip: skip,
      select: {
        id: true,
        userName: true,
        phone: true,
        date: true,
      },
    });

    const formattedData = data.map((item) => {
      return {
        id: item.id,
        userName: item.userName,
        phone: item.phone,
        reservationDate: dayjs(item.date).format("YYYY년MM월DD일").toString(),
      };
    });

    return {
      code: 200,
      message: "조회하였습니다.",
      data: formattedData,
    };
  } catch (e) {
    console.error(e);

    return {
      code: 500,
      message: "Server Error",
    };
  }
}

"use server";

import { z } from "zod";
import { PrismaClient as MysqlPrismaClient } from "@prisma/client";
import {
  CreateReservationRequest,
  CreateReservationResponse,
  createReservationSchema,
} from "./schema";

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
  const prisma = new MysqlPrismaClient();

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

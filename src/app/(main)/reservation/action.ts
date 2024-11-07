"use server";

import { z } from "zod";
import { PrismaClient as MysqlPrismaClient } from "@prisma/client";
import { CreateReservationRequest, createReservationSchema } from "./schema";

export type CreateReservationResponse =
  | {
      code: 400;
      message: string;
    }
  | { code: 200; message: string };
export async function createReservation(
  request: CreateReservationRequest
): Promise<CreateReservationResponse> {
  const validated = await createReservationSchema.safeParseAsync(request);

  if (!validated.success) {
    return {
      code: 400,
      message: "파라미터 오류가 있습니다.",
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

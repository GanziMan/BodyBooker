"use client";

import { z } from "zod";
import { PrismaClient as MysqlPrismaClient } from "@prisma/client";
import { CreateReservationRequest, createReservationSchema } from "./schema";

export async function createReservation(request: CreateReservationRequest) {
  const validated = await createReservationSchema.safeParseAsync(request);

  if (!validated.success) {
    return {};
  }
  const prisma = new MysqlPrismaClient();

  const createResponse = await prisma.reservation.create({
    data: {
      userName: "",
      date: new Date(),
    },
  });
}

"use server";

import { z } from "zod";

export const createReservationSchema = z.object({});

export type CreateReservationRequest = z.input<typeof createReservationSchema>;

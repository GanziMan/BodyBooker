import { z } from "zod";

export const createReservationSchema = z.object({
  name: z.string(),
  phone: z.string(),
});

export type CreateReservationRequest = z.input<typeof createReservationSchema>;

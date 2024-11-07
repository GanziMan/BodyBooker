import { z } from "zod";

export const createReservationSchema = z.object({
  name: z.string(),
  phone: z.string(),
});

export type CreateReservationRequest = z.input<typeof createReservationSchema>;

export type CreateReservationResponse =
  | {
      code: 400;
      message: string;
    }
  | { code: 200; message: string };

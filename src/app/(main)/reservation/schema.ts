import { z } from "zod";

export const createReservationSchema = z.object({
  name: z.string(),
  phone: z.string(),
});

export type CreateReservationRequest = z.input<typeof createReservationSchema>;

export type CreateReservationResponse = {
  code: 400 | 200;
  message: string;
};

export const pageReservationSchema = z.object({
  size: z.number().default(10),
  page: z.number(),
});

export type ReservationDto = {
  id: number;
  userName: string;
  phone: string;
  reservationDate: string;
  selectedDate: Date;
};
export type PageReservationRequest = z.input<typeof pageReservationSchema>;

export type PageReservationResponse =
  | {
      code: 400 | 500;
      message: string;
    }
  | {
      code: 200;
      message: string;
      data: ReservationDto[];
    };

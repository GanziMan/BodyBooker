"use client";
import { ko } from "date-fns/locale";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

export default function ReservationForm() {
  return <Calendar locale={ko} />;
}

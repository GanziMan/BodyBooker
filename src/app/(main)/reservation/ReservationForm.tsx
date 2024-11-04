"use client";
import { ko } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DialogComponent } from "@/components/Dialog";
import {
  DateAfter,
  DateBefore,
  DateInterval,
  DateRange,
  DayOfWeek,
} from "react-day-picker";

type Matcher =
  | boolean
  | ((date: Date) => boolean)
  | Date
  | Date[]
  | DateRange
  | DateBefore
  | DateAfter
  | DateInterval
  | DayOfWeek;

export default function ReservationForm() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      title="예약"
      locale={ko}
      selected={date}
      footer={<DialogComponent date={date!} />}
      onDayClick={(day) => {
        setDate(day);
      }}
      onSelect={setDate}
    />
  );
}

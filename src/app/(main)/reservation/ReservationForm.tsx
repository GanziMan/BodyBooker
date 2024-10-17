"use client";
import { ko } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
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

const selected: Matcher[] = [
  new Date(2024, 9, 20), // 특정 날짜
];

export default function ReservationForm() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Calendar
        title="예약"
        locale={ko}
        selected={selected}
        footer={<DialogComponent />}
        onDayClick={(day) => {}}
        onSelect={setDate}
      />
    </>
  );
}

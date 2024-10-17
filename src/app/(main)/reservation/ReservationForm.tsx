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

export default function ReservationForm() {
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
    // [new Date(2024, 9, 22), new Date(2024, 9, 23)], // 여러 날짜
    // { from: new Date(2024, 9, 25), to: new Date(2024, 9, 30) } as DateRange, // 날짜 범위
    // { before: new Date(2024, 9, 18) } as DateBefore, // 특정 날짜 이전
    // { after: new Date(2024, 9, 15) } as DateAfter, // 특정 날짜 이후
    // {
    //   after: new Date(2024, 9, 10),
    //   before: new Date(2024, 9, 20),
    // } as DateInterval, // 날짜 간격
  ];
  return (
    <>
      <Calendar
        title="예약"
        locale={ko}
        selected={selected}
        footer={<DialogComponent />}
        onDayClick={(day) => {}}
      />
    </>
  );
}

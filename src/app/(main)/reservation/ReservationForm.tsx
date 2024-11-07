"use client";
import { ko } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DialogComponent } from "@/components/Dialog";

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

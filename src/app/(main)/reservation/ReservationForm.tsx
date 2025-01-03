"use client";

import { ko } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { DialogComponent } from "@/components/Dialog";
import { useInView } from "react-intersection-observer";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { pageReservation } from "./action";

interface ReservationDataType {
  id: number;
  userName: string;
  phone: string;
  reservationDate: string;
  selectedDate: Date;
}

export default function ReservationForm() {
  const [reservations, setReservations] = useState<ReservationDataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasMore && !loading) {
      fetchReservations();
    }
  }, [inView]);

  const fetchReservations = async () => {
    setLoading(true);
    const result = await pageReservation({ page });

    if (result.code === 200) {
      setReservations((prev) => [...prev, ...result.data]);
      setPage((prev) => prev + 1);

      if (result.data.length >= 10) {
        setHasMore(result.data.length >= 10);
      }
    } else {
      setHasMore(false);
    }
  };

  return (
    <section>
      <Calendar
        title="예약"
        locale={ko}
        selected={date}
        // disabled={date}
        footer={<DialogComponent date={date!} />}
        onDayClick={(day) => {
          setDate(day);
        }}
        onSelect={setDate}
      />
      <Table>
        <TableCaption>예약 명단</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">아이디</TableHead>
            <TableHead>이름</TableHead>
            <TableHead>번호</TableHead>
            <TableHead className="text-right">예약날짜</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow key={reservation.id}>
              <TableCell className="font-medium">{reservation.id}</TableCell>
              <TableCell>{reservation.userName}</TableCell>
              <TableCell>{reservation.phone}</TableCell>
              <TableCell className="text-right">
                {reservation.reservationDate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div ref={ref} style={{ height: "1px" }}></div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { autoHyphen } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface ReservationType {
  name: string;
  phone: string;
}
export function DialogComponent() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ReservationType>();

  const [phone, setPhone] = useState<string>("");
  const [isPopOver, setIsPopOver] = useState<boolean>(false);
  useEffect(() => {
    setValue("phone", phone);
  }, [phone]);

  return (
    <Dialog open={isPopOver}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsPopOver(true)}
        >
          예약하기
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        onSubmit={() => {
          alert("");
        }}
      >
        <DialogHeader>
          <DialogTitle>바디프로필 예약 일정</DialogTitle>
          <DialogDescription>
            예약 날짜: [예약 날짜를 입력하세요]
            <br />
            준비사항: 촬영 전에 준비해야 할 사항이나 요구사항이 있다면 꼭 확인
            부탁드립니다.
            <br />
            <br />
            자세한 안내는 예약 확인 후 개별적으로 연락드리겠습니다.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              성함
            </Label>
            <Input
              id="name"
              defaultValue="김정웅"
              className="col-span-3"
              {...register("name")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              휴대폰 번호
            </Label>
            <Input
              id="username"
              value={phone}
              defaultValue="010-0000-0000"
              className="col-span-3"
              {...register("phone")}
              onChange={(e) => setPhone(autoHyphen(e.target.value))}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleSubmit((data) => {
              setIsPopOver(false);
            })}
          >
            예약하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

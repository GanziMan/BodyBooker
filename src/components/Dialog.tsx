"use client";

import { createReservation } from "@/app/(main)/reservation/action";
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
import toast from "react-hot-toast";

interface ReservationType {
  name: string;
  phone: string;
}

export function DialogComponent({ date }: { date: Date }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ReservationType>({
    mode: "onChange",
  });

  const [phone, setPhone] = useState<string>("");
  const [isPopOver, setIsPopOver] = useState<boolean>(false);

  useEffect(() => {
    setValue("phone", phone);
  }, [phone, setValue]);

  const onSubmit = async (data: ReservationType) => {
    await createReservation({
      name: data.name,
      phone: data.phone,
    }).then(() => {
      toast("예약되었습니다.");
      setIsPopOver(false);
    });
  };

  return (
    <Dialog open={isPopOver} onOpenChange={setIsPopOver}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="mt-3 w-full"
          onClick={() => setIsPopOver(true)}
        >
          예약하기
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>바디프로필 예약 일정</DialogTitle>
            <DialogDescription>
              예약 날짜: <>{date.toLocaleDateString()}</>
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
                defaultValue=""
                className="col-span-3"
                {...register("name", {
                  required: "이름은 필수값입니다.",
                  minLength: {
                    value: 1,
                    message: "이름은 최소 1글자 이상이어야 합니다.",
                  },
                })}
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
                {...register("phone", {
                  required: "휴대폰 번호는 필수값입니다.",
                  minLength: {
                    value: 13,
                    message: "휴대폰 최소 11자리를 입력해주세요.",
                  },
                  maxLength: {
                    value: 14,
                    message: "휴대폰 최대 12자리를 넘을 수 없습니다.",
                  },
                })}
                onChange={(e) => setPhone(autoHyphen(e.target.value))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              {isSubmitting ? "처리 중..." : "예약하기"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

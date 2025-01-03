"use client";

import Image from "next/image";

export default function LinkForm() {
  return (
    <div className="flex flex-col gap-8 w-full items-center text-[#474242]">
      <div
        className="flex gap-2 items-center"
        onClick={() =>
          window.open(
            "https://www.instagram.com/sera_bodyprofile/?igsh=MXB5bTVuMnVlcmR2ag%3D%3D",
            "_blank"
          )
        }
      >
        <Image
          src={"/images/icon/instagram-icon.svg"}
          width={40}
          height={40}
          alt="인스타그램 ic"
        />
        <p>INSTAGRAM</p>
      </div>
      <div
        onClick={() =>
          window.open("https://open.kakao.com/o/sKZAVw0g", "_blank")
        }
      >
        KaKao Talk Chanel (Click)
      </div>
    </div>
  );
}

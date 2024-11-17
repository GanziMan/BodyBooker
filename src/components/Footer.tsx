"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Footer() {
  const router = useRouter();
  return (
    <section className="w-full bg-[#262222E6] h-[281px] flex justify-center ">
      <div className="text-white flex justify-between max-w-[1280px] w-full px-20 py-10">
        <div className="flex justify-between w-full">
          <ul className="flex flex-col gap-2">
            <li onClick={() => router.push("/home")}>Home</li>
            <li onClick={() => router.push("/introduce")}>About</li>
            <li onClick={() => router.push("/reservation")}>Reservation</li>
            <li onClick={() => toast("준비중인 서비스입니다.")}>PhotoBook</li>
            <li
              onClick={() =>
                window.open("https://open.kakao.com/o/sKZAVw0g", "_blank")
              }
            >
              연락 및 상담 링크
            </li>
          </ul>
          <div>
            <Image
              src={"/images/icon/instagram-icon.svg"}
              width={30}
              height={30}
              alt="인스타그램 ic"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/sera_bodyprofile/?igsh=MXB5bTVuMnVlcmR2ag%3D%3D",
                  "_blank"
                )
              }
            />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

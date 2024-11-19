"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Footer() {
  const router = useRouter();
  return (
    <section className="w-full bg-[#262222E6] h-[281px] flex justify-center ">
      <div className="text-white flex flex-col gap-5 max-w-[1280px] w-full px-20 py-10">
        <div className="text-[#9e9e9e] text-xs w-full break-keep">
          <p>(주)설아 | 대표 박성기 | 사업자등록번호 453-81-01842</p>
          <p>충남 천안시 동남구 문암1길 68 </p>
        </div>
        <div className="flex justify-between w-full">
          <ul className="flex flex-col gap-2 text-sm">
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
        </div>
      </div>
    </section>
  );
}

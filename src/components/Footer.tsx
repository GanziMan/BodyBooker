"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <section className="w-full bg-[#262222E6] h-[281px]">
      <div></div>
      <div>
        <div>
          <Image
            src={"/images/icon/instagram-icon.svg"}
            width={50}
            height={50}
            alt="인스타그램 ic"
          />
        </div>
      </div>
    </section>
  );
}

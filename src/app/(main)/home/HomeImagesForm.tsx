"use client";

import Image from "next/image";

export default function HomeImagesForm() {
  return (
    <section className="grid grid-cols-4 gap-5 justify-items-center">
      {/* {Array.from({ length: 16 }).map((_, index) => (
        <Image
          src={`/images/profiles/profile-${index + 1}.jpg`}
          layout="fill"
          objectFit="contain"
          priority
          alt=""
        />
      ))} */}
      {Array.from({ length: 16 }).map((_, index) => (
        <Image
          src={`/images/profiles/profile-${index + 1}.jpg`}
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
          priority
          alt=""
          key={index}
          onClick={() =>
            window.open(
              "https://www.instagram.com/sera_bodyprofile/?igsh=MXB5bTVuMnVlcmR2ag%3D%3D",
              "_blank"
            )
          }
        />
      ))}
    </section>
  );
}

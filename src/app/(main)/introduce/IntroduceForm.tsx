"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function IntroduceForm() {
  const router = useRouter();
  return (
    <section className="max-w-3xl mx-auto p-8 mt-12 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        당신의 특별한 순간을 담다
      </h1>
      <h2 className="text-2xl font-semibold text-center text-blue-200 mb-6">
        바디 프로필 예약 사이트
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center break-keep">
        최고의 바디 프로필 촬영을 위해 설계된 예약 사이트입니다. 운동의 결실,
        도전의 결과, 또는 삶의 중요한 순간을 멋지게 기록하고 싶으신가요?
        전문가들이 당신만을 위해 준비한 다양한 스튜디오와 촬영 옵션을
        만나보세요.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed text-center break-keep">
        간편한 예약 프로세스를 통해 소중한 순간을 더욱 특별하게 만들어 드립니다.
        <strong>지금 바로 예약</strong>
        하고, 나만의 완벽한 순간을 사진으로 남겨 보세요!
      </p>
      <div className="mt-8 flex justify-center">
        <Button
          onClick={() => router.push("/reservation")}
          className="text-white px-6 py-3 rounded-full font-semibold  transition duration-300"
        >
          예약하기
        </Button>
      </div>
    </section>
  );
}

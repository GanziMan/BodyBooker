"use client";

import { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-full flex justify-center bg-[#28153C]">
      <section className="max-w-[600px] w-full h-full bg-white flex flex-col pb-[100px]">
        {children}
      </section>
    </main>
  );
}

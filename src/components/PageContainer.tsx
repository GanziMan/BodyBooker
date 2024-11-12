"use client";

import { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-full flex justify-center bg-white">
      <section className="max-w-[1200px] w-full h-full  flex flex-col pb-[100px]">
        {children}
      </section>
    </main>
  );
}

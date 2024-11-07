"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function HomeCarouselForm() {
  return (
    <div className="w-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Carousel className="w-full" plugins={[Autoplay({ delay: 2000 })]}>
        <CarouselContent>
          {Array.from({ length: 16 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-square">
                <Image
                  src={`/images/profiles/profile-${index + 1}.jpg`}
                  layout="fill"
                  objectFit="contain"
                  priority
                  alt=""
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

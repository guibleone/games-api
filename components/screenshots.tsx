"use client";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

export default function Screenshots({
  screenshots,
}: {
  screenshots: object[];
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-lg"
      >
        <CarouselContent>
          {screenshots.map((screenShot: any) => (
            <CarouselItem key={screenShot.id}>
              <div className="w-full mb-4">
                <Image
                  src={`http://images.igdb.com/igdb/image/upload/t_1080p/${screenShot.image_id}.jpg`}
                  alt={screenShot.name}
                  width={600}
                  height={150}
                  className="aspect-video object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <motion.div
        className="w-full bg-zinc-100 h-5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${(current / count) * 100}%` }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      <div className="py-2 text-center text-sm text-muted-foreground">
        Screenshot {current} of {count}
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";

export default function SingleCard({ game }: { game: any }) {
  const [readMore, setReadMore] = useState(false);
  const onClick = () => {
    setReadMore(!readMore);
  };

  return (
    <section className="mx-auto max-w-screen-lg px-8 py-5 md:py-0">
      <div className="flex flex-col gap-10 ">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold text-zinc-100">
            {game.name}
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 items-center">
            {game?.genres.map((genre: any) => (
              <p
                key={genre.id}
                className="mr-2 mt-2 text-sm text-center bg-gray-700 text-white px-4 py-2 rounded-full"
              >
                {genre.name}
              </p>
            ))}
          </div>
        </div>

        <p className="text-md text-zinc-400 md:text-lg">
          {game?.summary.length > 300 ? (
            <div className="flex flex-col">
              {readMore ? game?.summary : game?.summary.slice(0, 300) + "..."}
              <Button
                className="self-start mt-4"
                variant={readMore ? "outline" : "secondary"}
                onClick={onClick}
              >
                {readMore ? "Read Less" : "Read More"}
              </Button>
            </div>
          ) : (
            <></>
          )}
        </p>

        <div className="flex flex-wrap -mx-3 mt-4">
          {game?.screenshots.map((screenShot: any) => (
            <div
              key={screenShot.id}
              className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-4"
            >
              <Image
                src={`http://images.igdb.com/igdb/image/upload/t_1080p/${screenShot.image_id}.jpg`}
                alt={game.name}
                width={600}
                height={150}
                className="aspect-video object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

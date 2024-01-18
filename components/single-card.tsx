"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Screenshots from "./screenshots";

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
            <>{game?.summary}</>
          )}
        </p>

        <div className="flex justify-center">
          <Screenshots screenshots={game?.screenshots} />
        </div>
      </div>
    </section>
  );
}

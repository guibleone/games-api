"use client";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function GameCard({ game }: { game: any }) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${game.slug}`);
  };
  return (
    <div
      onClick={onClick}
      className="grid grid-cols-2 gap-0 md:gap-x-2 hover:cursor-pointer"
      key={game.name}
    >
      <Image
        src={
          game?.cover?.url
            ? `http://images.igdb.com/igdb/image/upload/t_1080p/${game?.cover?.image_id}.jpg`
            : "/no-image.jpg"
        }
        alt={game.name}
        width={150}
        height={150}
      />
      <div className="flex flex-col justify-between">
        <h2 className="font-bold text-zinc-100">{game.name}</h2>
        <p className="text-sm text-zinc-400">
          {game?.summary.length > 80
            ? game?.summary.slice(0, 80) + "..."
            : game?.summary}
        </p>
        <p className="text-sm text-gray-500 self-end">
          {formatDate(game?.first_release_date)}
        </p>
      </div>
    </div>
  );
}

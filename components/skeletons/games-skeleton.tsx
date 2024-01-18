import React from "react";
import { Skeleton } from "../ui/skeleton";

const games = 9;
export default function GamesSkeleton() {
  return (
    <div className="flex justify-between">
      {[...Array(games)].map((_, i) => (
        <div className="grid grid-cols-2 gap-0 sm:gap-10" key={i}>
          <Skeleton className="w-[150px] h-[200px] aspect-square" />
          <div className="flex flex-col gap-3">
            <Skeleton className="mb-2 w-full h-[40px]" />
            <Skeleton className="mb-2 w-full h-full" />
            <Skeleton className="mb-2 w-20 h-[30px] self-end" />
          </div>
        </div>
      ))}
    </div>
  );
}

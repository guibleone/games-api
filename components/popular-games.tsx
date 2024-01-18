import { fetchGamesPages } from "@/data";
import React, { Suspense } from "react";
import Pagination from "./pagination";
import Games from "./games";
import Search from "./search-input";
import GamesSkeleton from "./skeletons/games-skeleton";
import SelectGames from "./select-games";

export default async function PopularGames({
  query,
  currentPage,
  filter,
}: {
  query: string;
  currentPage: number;
  filter: string;
}) {
  const totalPages = await fetchGamesPages(query,filter);

  return (
    <div className="flex flex-col gap-10 ">
      <div className="sm:self-end flex items-center justify-between gap-2 md:mt-8">
        <SelectGames />
        <Search placeholder="Search games..." />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <Suspense fallback={<p>Loading...</p>}>
          <Games query={query} currentPage={currentPage} filter={filter} />
        </Suspense>
      </div>
      <Pagination totalPages={totalPages!} />
    </div>
  );
}

import { fetchFilteredGames, fetchGamesPages } from "@/data";
import React, { Suspense } from "react";
import Pagination from "./pagination";
import Games from "./games";
import Search from "./search-input";
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
  const totalPages = await fetchGamesPages(query, filter);
  const games = await fetchFilteredGames(query, currentPage, filter);

  return (
    <div className="flex flex-col gap-10 ">
      <div className="sm:self-end flex items-center justify-between gap-2 md:mt-8">
        <SelectGames />
        <Search placeholder="Search games..." />
      </div>
      <Games games={games} />
      <Pagination totalPages={totalPages!} />
    </div>
  );
}

import { fetchGamesPages } from "@/data";
import React, { Suspense } from "react";
import Pagination from "./pagination";
import Games from "./games";
import Search from "./search-input";

export default async function PopularGames({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const totalPages = await fetchGamesPages(query);

  return (
    <div className="flex flex-col gap-10 ">
      <div className="sm:self-end flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search games..." />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <Suspense fallback={<div>Carregando...</div>}>
          <Games query={query} currentPage={currentPage} />
        </Suspense>
      </div>
      <Pagination totalPages={totalPages!} />
    </div>
  );
}

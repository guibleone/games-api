import { fetchFilteredGames } from "@/data";
import React from "react";
import GameCard from "./game-card";

export default async function Games({
  query,
  currentPage,
  filter,
}: {
  query: string;
  currentPage: number;
  filter: string;
}) {
  const games = await fetchFilteredGames(query, currentPage, filter);

  return (
    <>
      {games.length === 0 && <div className="text-center">No games found.</div>}
      {games?.map((game: any) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  );
}

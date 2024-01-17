import { fetchFilteredGames } from "@/data";
import React from "react";
import GameCard from "./game-card";

export default async function Games({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const games = await fetchFilteredGames(query, currentPage);

  return (
    <>
      {games.length === 0 && <div className="text-center">No games found.</div>}
      {games?.map((game: any) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  );
}

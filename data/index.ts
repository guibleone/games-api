import { GAMES_URL } from "@/urls";

const GAMES_PER_PAGE = 9;
export const fetchFilteredGames = async (
  query: string,
  currentPage: number
) => {
  const offset = (currentPage - 1) * GAMES_PER_PAGE;

  const games = await fetch(GAMES_URL, {
    method: "POST",
    cache: "no-store",
    // @ts-ignore
    headers: {
      "Client-ID": process.env.CLIENT_ID,
      Authorization: process.env.AUTHORIZATION,
      "Content-Type": "application/json",
    },
    body: `
    fields name, id, first_release_date, summary,slug, screenshots.*, cover.*, rating; 
    limit ${GAMES_PER_PAGE}; 
    where name ~ *"${query}"* & rating_count > 100;
    offset ${offset};
    `,
  });

  return games.json();
};

export const fetchGamesPages = async (query: string) => {
  const games = await fetch(GAMES_URL, {
    method: "POST",
    cache: "no-store",
    // @ts-ignore
    headers: {
      "Client-ID": process.env.CLIENT_ID,
      Authorization: process.env.AUTHORIZATION,
      "Content-Type": "application/json",
    },
    body: `
    where name ~ *"${query}"* & rating_count > 100;
    `,
  });

  const totalGames = games.headers.get("X-Count");
  const totalPages = Math.ceil(parseInt(totalGames!) / GAMES_PER_PAGE);

  return totalPages;
};

// get single game info

export const fetchSingleGame = async (slug: string) => {
  try {
    const game = await fetch(GAMES_URL, {
      method: "POST",
      cache: "no-store",
      // @ts-ignore
      headers: {
        "Client-ID": process.env.CLIENT_ID,
        Authorization: process.env.AUTHORIZATION,
        "Content-Type": "application/json",
      },
      body: `
      fields name, id, created_at, summary, slug, screenshots.*, rating, platforms.* , genres.*;
      where slug = "${slug}";
      `,
    });

    return game.json();
  } catch (error) {
    return error;
  }
};

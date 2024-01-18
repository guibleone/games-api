import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(unixTimestamp: number) {
  const milliseconds = unixTimestamp * 1000;

  // Create a Date object with the given timestamp
  const date = new Date(milliseconds);

  // Specify the time zone for Brazil (America/Sao_Paulo)
  const timeZone = "America/Sao_Paulo";
  
  // Format the date and time using Intl.DateTimeFormat
  const formattedDateTime = new Intl.DateTimeFormat("pt-BR", {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date);

  return formattedDateTime;

}

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};


export const generateMeanRating = (ratings: any) => {
  const total = ratings.reduce((acc: any, cur: any) => {
    return acc + cur.rating;
  }, 0);

  return total / ratings.length;
}
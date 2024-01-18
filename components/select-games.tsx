"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function SelectGames() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilter = (filter: any) => {
    const params = new URLSearchParams(searchParams);

    if (filter) {
      params.set("filter", filter);
    } else {
      params.delete("filter");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      className="rounded-md border text-zinc-950 border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500 h-10"
      onChange={(e) => handleFilter(e.target.value)}
    >
      <option value="">All</option>
      <option value="rating" className="text-zinc-500 hover:bg-zinc-950">
        Popular
      </option>
      <option value="first_release_date">New</option>
      <option value="hypes">Hypes</option>
    </select>
  );
}

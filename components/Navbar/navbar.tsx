import Link from "next/link";
import React from "react";

const links = [
  {
    name: "Games",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
];
  

export default function Navbar() {
  return (
    <nav className="bg-gray-600">
      <div className="mx-auto max-w-screen-xl px-8 py-1.5 flex items-center justify-between">
        <h1 className="font-bold text-2xl text-gray-200">
          <Link href="/">GamesXD</Link>
        </h1>

        <ul className="flex flex-row gap-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-200 hover:text-white hover:underline"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

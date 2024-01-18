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

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="mx-auto max-w-screen-xl px-8 py-10 border-t border-muted-foreground flex items-center justify-center">
      <p className="text-muted-foreground">
        Developed by <Link className="underline" href="https://github.com/guibleone">Guilherme Leone</Link>
      </p>
      </div>
    </footer>
  );
}

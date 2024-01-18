import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GamesXD",
  description: "Search for your favorite games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-zinc-900 text-zinc-100 flex flex-col min-h-screen",
          inter.className
        )}
      >
        <div className="flex-1">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

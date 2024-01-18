"use client";
import React, { useEffect, useState } from "react";
import GameCard from "./game-card";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useAnimate } from "framer-motion";

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export default function Games({ games }: { games: any }) {


  return (
    <div className="">
      {games.length === 0 && <div className="text-center">No games found.</div>}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-10"
        variants={container}
        initial="initial"
        animate="animate"
      >
        {games?.map((game: any) => (
          <motion.div variants={item} key={game.id}>
            <GameCard game={game} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

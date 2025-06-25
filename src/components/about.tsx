import React from "react";
import Modal from "./ui/modal";
import AllMoves from "./all-moves";
interface Move {
  name: string;
  methods: any[];
}
interface AboutProps {
  weight: any;
  height: any;
  moves: Move[];
}

export default function About({ weight, height, moves }: AboutProps) {
  const moveNames = moves
    ?.slice(0, 3)
    .map((move) => move.name)
    .join("\n");

  return (
    <div className="flex items-center justify-center text-center px-6 divide-x-2 divide-gray-200">
      <div className="flex items-center space-y-1">
        <img className="min-w-3.5 min-h-3.5" src="/icons/weight.svg" alt="" />
        <p className="text-xs md:text-base text-medium">{weight} Kg</p>
      </div>
      <div className="flex items-center space-y-1">
        <img
          className="rotate-90 min-w-3.5 min-h-3.5"
          src="/icons/height.svg"
          alt=""
        />
        <p className="text-xs md:text-base text-medium">{height} m</p>
      </div>
      <div className="flex flex-col items-center space-y-1 pl-4">
        <p className="text-xs md:text-base text-medium">{moveNames}</p>
      </div>
    </div>
  );
}

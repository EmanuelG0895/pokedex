import React from "react";
interface AboutProps {
  weight: string;
  height: string;
  moves: string[];
}

export default function About({ weight, height, moves }: AboutProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6">
      <div className="flex items-center">
        <img className="min-w-3.5 min-h-3.5" src="/icons/weight.svg" alt="" />
        <p className="">9,9kg</p>
      </div>
      <p className="text-xs md:text-base text-medium">Weight</p>
    </div>
  );
}

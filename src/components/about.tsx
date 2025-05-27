import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center pr-6">
      <div className="flex items-center">
        <img className="min-w-3.5 min-h-3.5" src="/icons/weight.svg" alt="" />
        <p className="">9,9kg</p>
      </div>
      <p className="text-xs md:text-base text-medium">Weight</p>
    </div>
  );
}

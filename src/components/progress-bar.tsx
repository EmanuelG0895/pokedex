"use client"
import React from "react";

interface progressBarProps {
  value: string;
  stat: string;
}

export default function ProgressBar({ value, stat }: progressBarProps) {
  return (
    <div className="flex items-center  space-x-2">
      <label className="text-light min-w-8" htmlFor="progress">
        {stat}
      </label>
      <p className="text-base border-l pl-2.5 text-light">
        <span className="text-black">9999</span>
      </p>
      <progress
        id="progress"
        value={value}
        max="100"
        className="w-full h-2 appearance-none rounded-lg
               [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-gray-200
               [&::-webkit-progress-value]:rounded-l-lg [&::-webkit-progress-value]:bg-amber-700
               [&::-moz-progress-bar]:bg-amber-700"
      >
        70%
      </progress>
    </div>
  );
}

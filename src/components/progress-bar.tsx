"use client";
import { useEffect, useState } from "react";

interface progressBarProps {
  value: string;
  stat: string;
}

export default function ProgressBar({ value, stat }: progressBarProps) {
  const [nameStat, setNameStat] = useState("");

  useEffect(() => {
    if (stat === "attack") {
      setNameStat("ATK");
    }
    if (stat === "defense") {
      setNameStat("DEF");
    }
    if (stat === "hp") {
      setNameStat("HP");
    }
    if (stat === "special-attack") {
      setNameStat("SATK");
    }
    if (stat === "special-defense") {
      setNameStat("SDEF");
    }
    if (stat === "speed") {
      setNameStat("SPD");
    }
  }, [stat]);

  // Formatear el valor para que siempre tenga 3 dígitos
  // const formattedValue = value.padStart(3, "0");

  return (
    <div className="flex items-center">
      {/* Etiqueta del stat */}
      <div className="w-12 text-right border-r pr-3 border-light" >
        <label
          className="text-sm font-medium text-gray-700 uppercase"
          htmlFor={`progress-${stat}`}
        >
          {nameStat}
        </label>
      </div>

      {/* Valor numérico */}
      <div className="w-8">
        <span className="text-sm font-medium text-gray-900">{value}</span>
      </div>

      {/* Barra de progreso */}
      <div className="flex-1">
        <progress
          id={`progress-${stat}`}
          value={value}
          max="100"
          className="w-full h-1 items-center flex appearance-none rounded-sm
                   [&::-webkit-progress-bar]:rounded-sm [&::-webkit-progress-bar]:bg-gray-200
                   [&::-webkit-progress-value]:rounded-sm [&::-webkit-progress-value]:bg-grass
                   [&::-moz-progress-bar]:bg-green-500 [&::-moz-progress-bar]:rounded-sm"
        />
      </div>
    </div>
  );
}

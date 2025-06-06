"use client";
import { useEffect, useState } from "react";

interface progressBarProps {
  value: string;
  stat: string;
  type: string;
}

export default function ProgressBar({ value, stat, type }: progressBarProps) {
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
  const formattedValue = String(value).padStart(3, "0");

  return (
    <div className="flex items-center space-x-2">
      {/* Etiqueta del stat */}
      <div className="w-12 text-right border-r border-light pr-2">
        <label className="text-sm font-bold text-gray-700 uppercase">
          {nameStat}
        </label>
      </div>

      {/* Valor numérico */}
      <div className="w-8">
        <span className="text-sm md:text-base font-medium text-black">
          {formattedValue}
        </span>
      </div>

      {/* Barra de progreso */}
      <div
        className="w-full rounded-full h-1.5 flex-1 items-center"
        style={{
          backgroundColor: `var(--color-${type[0]}-transparent`,
        }}
      >
        <div
          className="h-1.5 rounded-l-full "
          style={{
            width: `${value}px`,
            backgroundColor: `var(--color-${type[0]})`,
          }}
        />
      </div>
    </div>
  );
}

import React from "react";

interface PokemonDetailsProps {
  className?: string;
  pokemonType: string;
}

function PokemonType({
  className = " ",
  pokemonType,
}: PokemonDetailsProps) {
  return (
    <div
      className={`${className} rounded-lg px-2 py-0.5 text-white font-bold text-[16px] capitalize`}
    >
      {pokemonType}
    </div>
  );
}

export default PokemonType;

import React from "react";

interface PokemonDetailsProps {
  pokemonType: string[];
  color?: string;
}

function PokemonType({ pokemonType, color }: PokemonDetailsProps) {
  return (
    <>
      {pokemonType.map((type: string, index: number) => (
        <div
          key={index}
          className="rounded-lg px-2 py-0.5 text-white font-bold text-[16px] capitalize"
          style={{ backgroundColor: color }}
        >
          {type}
        </div>
      ))}
    </>
  );
}

export default PokemonType;

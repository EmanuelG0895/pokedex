import React from "react";

interface PokemonDetailsProps {
  pokemonType: string[];
}

function PokemonType({ pokemonType }: PokemonDetailsProps) {
  return (
    <>
      {pokemonType.map((type: string, index: number) => (
        <div
          key={index}
          className="rounded-lg px-2 py-0.5 text-white font-bold text-[16px] capitalize"
          style={{ backgroundColor: `var(--color-${type})` }}
        >
          {type}
        </div>
      ))}
    </>
  );
}

export default PokemonType;

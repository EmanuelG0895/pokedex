import React from 'react';
import { useParams } from 'next/navigation';

export default function PokemonDetails() {
  const params = useParams();
  const { pokemon } = params as { pokemon: string };

  return (
    <div>
      <h1>Detalles de Pokémon</h1>
      <p>Pokémon: {pokemon}</p>
    </div>
  );
}

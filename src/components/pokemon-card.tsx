import Link from "next/link";
import { useEffect, useState } from "react";

interface PokemonCardParams {
  url: string;
}
export default function PokemonCard({ url }: PokemonCardParams) {
  const [pokemonData, setPokemonData] = useState<any>({});
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json(); // Esperar la conversión a JSON
        setPokemonData(data)
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemon();
  }, [url]);
  return (
    <Link
      href={`/pokemon-detail/${pokemonData?.species?.name}`}
      className="relative rounded-lg bg-white shadow-[2px_2px_2px_1px_var(--tw-shadow-color,_rgb(0_0_0_/_.1)),_0_1px_1px_1px_var(--tw-shadow-color,_rgb(0_0_0_/_.1))] min-w-[104px] min-h-[108px]"
    >
      {/* Pokemon Number */}
      <div className="flex justify-end p-2">
        <p className="text-[8px] md:mb-1 md:text-base font-medium text-gray-500">
          # {pokemonData.id}
        </p>
      </div>

      <div>
        {/* Pokémon silhouette shape */}
        <img
          className="rounded-lg flex -top-3 md:-top-5 left-0 inset-x-0 inset-y-0 z-20 relative px-4  min-w-[72px] min-h-[72px]"
          src={
            pokemonData?.sprites?.other?.["official-artwork"]?.front_default
              ?  pokemonData?.sprites?.other?.["official-artwork"]?.front_default
              : "/images/default-pokemon.svg"
          }
          alt="pokemonImage"
        />
      </div>

      {/* Pokemon Name */}
      <div className="w-full text-center bg-background absolute bottom-0 rounded-t-lg pt-6 md:pt-11 rounded-lg">
        <h3 className="text-xs md:text-base font-normal capitalize pb-1">
          {pokemonData?.species?.name}
        </h3>
      </div>
    </Link>
  );
}

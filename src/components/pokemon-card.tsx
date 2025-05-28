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
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemon();
  }, [url]);
  return (
    <Link
      href={`/pokemon-detail/${pokemonData?.species?.name}`}
      className="relative max-w-[108px] max-h-[104px] min-w-[104px] min-h-[108px] rounded-lg shadow-[2px_2px_2px_1px_var(--tw-shadow-color,_rgb(0_0_0_/_.1)),_0_1px_1px_1px_var(--tw-shadow-color,_rgb(0_0_0_/_.1))] overflow-hidden"
    >
      <div className="flex flex-col h-full w-full">
        <div className="w-full h-full bg-white">
          <p className="text-[8px] md:mb-1 md:text-base font-medium text-medium text-end py-1 px-2">
            # {pokemonData.id}
          </p>
        </div>
        <img
          className="absolute max-w-[72px] max-h-[72px] top-0 bottom-5 left-0 right-0 m-auto md:top-4"
          src={
            pokemonData?.sprites?.other?.["official-artwork"]?.front_default
              ? pokemonData?.sprites?.other?.["official-artwork"]?.front_default
              : "/images/default-pokemon.svg"
          }
          alt="pokemonImage"
        />

        <div className="w-full rounded-t-lg h-full md:mt-5 bg-gray-200 text-center flex items-end justify-center">
          <p className="text-xs md:text-base font-normal capitalize pb-1">
            {pokemonData?.species?.name}
          </p>
        </div>
      </div>
    </Link>
  );
}

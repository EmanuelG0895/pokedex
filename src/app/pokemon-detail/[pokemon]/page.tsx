"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import PokemonType from "@/components/pokemon-type";
import About from "@/components/about";
import ProgressBar from "@/components/progress-bar";
import { getPokemonDetail } from "@/utils/getPokemonDetail";

export default function PokemonDetails() {
  const params = useParams();
  const { pokemon } = params as { pokemon: string };
  const router = useRouter();
  const [pokemonImage, setPokemonImage] = useState<string | null>(null);
  const [pokemonStats, setPokemonStats] = useState<any[]>([]);
  const [pokemonType, setPokemonType] = useState<any>([]);
  const [pokemonColor, setPokemonColor] = useState<string>("");
  async function fetchPokemonDetails() {
    const { pokemonImage, pokemonStats, pokemonType, pokemonColor } =
      await getPokemonDetail(pokemon);
    setPokemonImage(pokemonImage); // URL de la imagen
    setPokemonStats(pokemonStats); // Array de stats
    setPokemonType(pokemonType); // "grass", "fire", etc.
    setPokemonColor(pokemonColor); // "grass", "fire", etc.
  }
  useEffect(() => {
    fetchPokemonDetails();
  }, [pokemon]);

  return (
    <main
      className="h-svh w-full px-2.5"
      style={{ backgroundColor: pokemonColor }}
    >
      <header className="pokeball-background">
        <div className="text-white font-bold flex items-center justify-between p-4">
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="h-8 w-8 cursor-pointer"
          >
            <img
              className="h-8 w-8 opacidad"
              src="/navigation/arrow_back.svg"
              alt=""
              role="presentation"
            />
          </button>
          <h1 className="capitalize text-2xl md:text-3xl">{pokemon}</h1>
          <p className="md:text-base text-xs">#100</p>
        </div>
      </header>
      <section className="flex justify-center absolute right-0 left-0 top-24">
        <img
          className="max-w-52 max-h-52"
          src={pokemonImage || "/images/default-pokemon.svg"}
          alt=""
        />
      </section>
      <section className="bg-white flex flex-col rounded-lg space-y-4 text-center lg:w-full mx-auto">
        <div className="flex justify-center space-x-4 mt-14">
          <PokemonType pokemonType={pokemonType} />
        </div>
        <h2 className="text-light font-bold capitalize text-base">
          add to fav add to team
        </h2>
        <div className="divide-x flex justify-center ">
          <About />
        </div>
        <div className="container mx-auto w-full p-4 ">
          {pokemonStats?.map((pokemon: any, index: number) => {
            return (
              <ProgressBar
                key={index}
                stat={pokemon.stat.name}
                value={pokemon.base_stat}
                type={pokemonType}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

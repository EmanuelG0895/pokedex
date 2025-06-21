"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import PokemonType from "@/components/pokemon-type";
import About from "@/components/about";
import ProgressBar from "@/components/progress-bar";
import { getPokemonDetail } from "@/utils/getPokemonDetail";

import AddTeam from "@/components/add-team";
import FavoriteButton from "@/components/favorite-button";

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
    setPokemonImage(pokemonImage);
    setPokemonStats(pokemonStats);
    setPokemonType(pokemonType);
    setPokemonColor(pokemonColor);
  }
  useEffect(() => {
    fetchPokemonDetails();
  }, [pokemon]);

  return (
    <main
      className="h-svh px-2.5 w-full"
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
      <section className="absolute flex justify-center left-0 right-0 top-24">
        <img
          className="max-w-52 max-h-52"
          src={pokemonImage || "/images/default-pokemon.svg"}
          alt=""
        />
      </section>
      <section className="bg-white flex flex-col justify-between lg:w-full mx-auto rounded-lg">
        <div className="container flex flex-row items-start justify-between mx-auto p-4 pt-4 space-y-4 w-full z-50 md:justify-start md:space-x-4 md:space-y-0">
          <FavoriteButton pokemon={pokemon} />
          <AddTeam />
        </div>
        <div className="flex justify-center space-x-4">
          <PokemonType pokemonType={pokemonType} />
        </div>
        <div className="divide-x flex justify-center">
          <About height="" moves={[]} weight="" />
        </div>
        <section className="container mx-auto p-4 w-full md:p-0">
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
        </section>
      </section>
    </main>
  );
}

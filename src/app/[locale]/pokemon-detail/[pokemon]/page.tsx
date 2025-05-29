"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import PokemonType from "@/components/pokemon-type";
import About from "@/components/about";
import ProgressBar from "@/components/progress-bar";

export default function PokemonDetails() {
  const params = useParams();
  const { pokemon } = params as { pokemon: string };
  const router = useRouter();
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonStats, setPokemonStats] = useState([]);

  useEffect(() => {
    if (!pokemon) return;
    fetch(`/api/pokemonDetail?name=${pokemon}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemonImage(
          data.sprites?.other?.["official-artwork"]?.front_default
        );
        setPokemonStats(data.stats);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, [pokemon]);

  return (
    <main className="bg-light h-svh w-full px-2.5">
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
          <PokemonType pokemonType="type" className="bg-amber-500" />
          <PokemonType pokemonType="type" className="bg-amber-500" />
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
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

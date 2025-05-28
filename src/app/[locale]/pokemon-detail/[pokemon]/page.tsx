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

  return (
    <main className="bg-light h-svh p-2 w-full">
      <header className="bg-[url('/icons/pokeball-opacity.svg')] h-60 relative bg-no-repeat bg-right-top bg-[length:65%] md:bg-[length:30%] lg:bg-[length:20%] lg:bg-[position:right_center] xl:bg-[length:14%]">
        <div className="text-white font-bold flex items-center justify-between px-4">
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
          <span className="md:text-base text-xs">#100</span>
        </div>
        <div className="absolute top-11/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            className="h-58 w-52"
            src="/images/default-pokemon.svg"
            alt={`Image of ${pokemon}`}
          />
        </div>
      </header>
      <section className="bg-white flex flex-col rounded-lg space-y-4 text-center mt-2 lg:w-full mx-auto">
        <div className="flex justify-center space-x-4 mt-16">
          <PokemonType pokemonType="type" className="bg-amber-500" />
          <PokemonType pokemonType="type" className="bg-amber-500" />
        </div>
        <h2 className="text-light font-bold capitalize text-[16px]">
          add to fav add to team
        </h2>
        <div className="divide-x flex justify-center">
          <About />
          <About />
          <About />
        </div>
        <div className="container mx-auto w-full p-4">
          <ProgressBar stat="HP" value="50" />
          <ProgressBar stat="HP" value="50" />
          <ProgressBar stat="HP" value="50" />
          <ProgressBar stat="HP" value="50" />
          <ProgressBar stat="HP" value="50" />
          <ProgressBar stat="HP" value="50" />
        </div>
      </section>
    </main>
  );
}

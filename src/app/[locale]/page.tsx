"use client";

import Navbar from "@/components/navbar";
import PokemonCard from "@/components/pokemon-card";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [limit, setLimit] = useState("30");
  const [offset, setOffset] = useState("0");

  useEffect(() => {
    fetch(`/api/pokemon?limit=${limit}&offset=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-primary h-svh">
      <Navbar />
      <div className="grid grid-cols-3 gap-x-2.5 gap-y-8 justify-items-center rounded-lg bg-white mx-4 overflow-auto px-3 py-7 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-8">
        {loading ? (
          <p>Cargando pokémons...</p>
        ) : (
          pokemonList.map((pokemon: any, index: number) => (
            <PokemonCard
              key={index}
              name={pokemon.name}
              number={index + 1}
              url={pokemon.url}
            />
          ))
        )}
      </div>
      <div className="text-center text-3xl text-white">pagination</div>
    </div>
  );
}

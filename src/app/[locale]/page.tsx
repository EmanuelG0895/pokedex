"use client";
import Navbar from "@/components/navbar";
import PokemonCard from "@/components/pokemon-card";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState<any>([]);
  const [limit, setLimit] = useState();
  const [offset, setOffset] = useState();
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

  if (loading) return;
  return (
    <div className="bg-primary h-svh">
      <Navbar />
      <div className="bg-white px-3 py-7 grid grid-cols-3 rounded-lg container mx-auto space-y-4 items-center justify-items-center lg:grid-cols-6 lg:space-y-6">
        {loading ? (
          <p>Cargando pokémons...</p>
        ) : (
          pokemonList.map((pokemon: any, index: number) => (
            <PokemonCard
              key={index}
              name={pokemon.name}
              number="# 1"
              url={pokemon.url}
            />
          ))
        )}
      </div>
    </div>
  );
}

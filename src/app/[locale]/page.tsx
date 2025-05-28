"use client";

import Navbar from "@/components/navbar";
import Pagination from "@/components/paginacion";
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
      <div className="h-[calc(100svh-100px)] md:h-auto inset-shadow-sm grid grid-cols-3 gap-2 md:gap-y-4 px-2.5 py-7 md:grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] justify-items-center rounded-lg bg-white mx-4 overflow-auto ">
        {loading ? (
          <p>Cargando pokémons...</p>
        ) : (
          pokemonList.map((pokemon: any, index: number) => (
            <PokemonCard key={index} url={pokemon.url} />
          ))
        )}
      </div>
      <div className="flex justify-center items-center mt-1">
        <Pagination />
      </div>
    </div>
  );
}

"use client";

import Loading from "@/components/loading";
import Navbar from "@/components/navbar";
import Pagination from "@/components/paginacion";
import PokemonCard from "@/components/pokemon-card";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const limit = 153;
  const [offset, setOffset] = useState(0);
  const totalItems = 1500;
  const totalPages = Math.ceil(totalItems / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  useEffect(() => {
    setLoading(true);
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
  }, [limit, offset]);

  const handlePageChange = (page: number) => {
    setOffset((page - 1) * limit);
  };

  return (
    <div className="bg-primary h-svh">
      <Navbar />
      <div className="custom-scrollbar h-[calc(100svh-100px)] inset-shadow-sm grid grid-cols-3 gap-2 md:gap-y-4 px-2.5 py-7 md:grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] justify-items-center rounded-lg bg-white mx-4 overflow-auto">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center col-span-3">
            <Loading message="Espera un momento entrenador estamos hablando con el profesor..." />
          </div>
        ) : (
          pokemonList.map((pokemon: any, index: number) => (
            <PokemonCard key={index} url={pokemon.url} />
          ))
        )}
      </div>
      <div className="flex justify-center items-center mt-1">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

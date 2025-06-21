"use client";

import { getPokemonDetail } from "@/utils/getPokemonDetail";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function FavoriteSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState<
    Array<{
      image: string;
      color: string;
      name: string;
      width: number;
      height: number;
    }>
  >([]);

  async function fetchPokemonDetails() {
    setIsLoading(true);
    if (typeof window !== "undefined") {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const pokemonData = [];

      for (const favorite of favorites) {
        const { pokemonImage, pokemonColor } = await getPokemonDetail(
          favorite || ""
        );

        // Generar dimensiones variadas para crear el efecto masonry
        const variations = [
          { width: 300, height: 400 },
          { width: 250, height: 350 },
          { width: 400, height: 250 },
          { width: 350, height: 300 },
          { width: 280, height: 320 },
          { width: 320, height: 380 },
          { width: 300, height: 450 },
          { width: 380, height: 220 },
          { width: 320, height: 280 },
          { width: 260, height: 340 },
          { width: 290, height: 420 },
          { width: 340, height: 380 },
        ];

        const randomVariation: any =
          variations[pokemonData.length % variations.length];

        pokemonData.push({
          image: pokemonImage,
          color: pokemonColor || "#f3f4f6",
          name: favorite,
          width: randomVariation.width,
          height: randomVariation.height,
        });
      }
      setPokemonList(pokemonData);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  // Función para quitar de favoritos
  function removeFromFavorites(pokemonName: string) {
    if (typeof window !== "undefined") {
      const favorites: string[] = JSON.parse(localStorage.getItem("favorites") || "[]");
      const newFavorites = favorites.filter((name) => name !== pokemonName);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setPokemonList((prev) => prev.filter((p) => p.name !== pokemonName));
    }
  }

  return (
    <main className="w-full">
      {isLoading ? (
        <section className="text-center py-12">
          <Loading message="Cargando Pokémon favoritos..." />
        </section>
      ) : pokemonList.length === 0 ? (
        <section className="text-center py-12">
          <p>No tienes pokemon favoritos, agrega algunos</p>
        </section>
      ) : (
        <section className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
          {pokemonList.map((pokemon, index) => (
            <article
              key={`${pokemon.name}-${index}`}
              className="break-inside-avoid mb-4 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{
                backgroundColor: pokemon.color,
              }}
              aria-label={`Tarjeta de ${pokemon.name}`}
            >
              <div className="relative group">
                <header className="absolute top-0 right-0 pt-2 pr-4 ">
                  <button
                    onClick={() => removeFromFavorites(pokemon.name)}
                    className="cursor-pointer"
                    aria-label={`Quitar ${pokemon.name} de favoritos`}
                  >
                    <img src="/icons/favorite-filled.svg" alt="favorito" />
                  </button>
                </header>
                <img
                  src={pokemon.image || "/images/default-pokemon.svg"}
                  alt={pokemon.name}
                  className="object-contain"
                  style={{
                    aspectRatio: `${pokemon.width}/${pokemon.height}`,
                  }}
                  loading="lazy"
                />
                <footer className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-bold capitalize">
                    {pokemon.name}
                  </h3>
                </footer>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

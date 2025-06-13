const typeColors: Record<string, string> = {
  bug: "#a7b723",
  dark: "#212121",
  dragon: "#7037ff",
  electric: "#f9cf30",
  fairy: "#e69eac",
  fighting: "#c12239",
  fire: "#f57d31",
  flying: "#a891ec",
  ghost: "#70559b",
  grass: "#74cb48",
  ground: "#dec16b",
  ice: "#9ad6df",
  light: "#e0e0e0",
  medium: "#666666",
  normal: "#aaa67f",
  poison: "#a43e9e",
  primary: "#dc0a2d",
  psychic: "#fb5584",
  rock: "#b69e31",
  steel: "#b7b9d0",
  water: "#6493eb",
  white: "#ffffff",
  wireframe: "#b8b8b8",
};

export const getPokemonDetail = async (pokemon: string) => {
  try {
    const res = await fetch(`/api/pokemonDetail?name=${pokemon}`);
    const data = await res.json();

    const pokemonImage =
      data.sprites?.other?.["official-artwork"]?.front_default || "";
    const pokemonStats = data.stats || [];
    const pokemonType: string[] =
      data.types?.map((pokemon: any) => pokemon.type.name) || [];
    const pokemonColor = typeColors[pokemonType[0]] || typeColors["medium"];
    return { pokemonImage, pokemonStats, pokemonType, pokemonColor };
  } catch (err) {
    console.error("Error fetching Pokémon detail:", err);
    throw err;
  }
};

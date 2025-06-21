import { useEffect, useState } from "react";

export default function FavoriteButton({ pokemon }: { pokemon: string }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(favorites.includes(pokemon));
    }
  }, [pokemon]);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      
      if (isFavorite) {
        const updatedFavorites = favorites.filter((fav: string) => fav !== pokemon);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsFavorite(false);
      } else {
        const updatedFavorites = [...favorites, pokemon];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsFavorite(true);
      }
    }
  };

  return (
    <button
      className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={isFavorite ? "/icons/favorite-filled.svg" : "/icons/favorite-outline.svg"}
        className="w-6 h-6"
        alt="Favorite logo"
      />
    </button>
  );
}

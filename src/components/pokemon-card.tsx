import Link from "next/link";

interface PokemonCardParams {
  number: number;
  name: string;
  url: string;
}
export default function PokemonCard({ number, name, url }: PokemonCardParams) {
  return (
    <Link
      href={`/pokemon-detail/${name}`}
      className="relative rounded-lg bg-white shadow-[0px_0px_10px_2px_rgba(0,0,0,0.25)] "
    >
      {/* Pokemon Number */}
      <div className="flex justify-end p-2 mb-2 md:mb-4">
        <p className="text-xs md:text-base font-medium text-gray-500">
          # {number}
        </p>
      </div>

      <div>
        {/* Pokémon silhouette shape */}
        <img
          className="rounded-lg flex -top-5 md:-top-7 left-0 inset-x-0 inset-y-0 z-20 relative px-4"
          src="/images/default-pokemon.svg"
          alt="pokemonImage"
        />
      </div>

      {/* Pokemon Name */}
      <div className="w-full text-center bg-background absolute bottom-0 rounded-t-lg pt-6 pb-1 rounded-lg">
        <h3 className="text-xs md:text-base font-normal capitalize">{name}</h3>
      </div>
    </Link>
  );
}

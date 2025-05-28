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
      className="relative rounded-lg bg-white shadow-[2px_2px_2px_1px_var(--tw-shadow-color,_rgb(0_0_0_/_.1)),_0_1px_1px_1px_var(--tw-shadow-color,_rgb(0_0_0_/_.1))] w-[104px] h-[108px]"
    >
      {/* Pokemon Number */}
      <div className="flex justify-end p-2">
        <p className="text-[8px] md:text-base font-medium text-gray-500">
          # {number}
        </p>
      </div>

      <div>
        {/* Pokémon silhouette shape */}
        <img
          className="rounded-lg flex -top-1 md:-top-5 left-0 inset-x-0 inset-y-0 z-20 relative px-4"
          src="/images/default-pokemon.svg"
          alt="pokemonImage"
        />
      </div>

      {/* Pokemon Name */}
      <div className="w-full text-center bg-background absolute bottom-0 rounded-t-lg pt-4  rounded-lg">
        <h3 className="text-xs md:text-base font-normal capitalize">{name}</h3>
      </div>
    </Link>
  );
}

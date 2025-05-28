import Link from "next/link";

interface PokemonCardParams {
  number: string;
  name: string;
  url: string;
}
export default function PokemonCard({ number, name, url }: PokemonCardParams) {
  return (
    <Link
      href={`/pokemon-detail/${name}`}
      className="relative rounded-lg w-[104px] h-full lg:w-[200px] lg:h-[200px] bg-white shadow-[0px_0px_10px_2px_rgba(0,0,0,0.25)] flex flex-col items-center justify-between"
    >
      {/* Pokemon Number */}
      <div className="w-full flex justify-end py-1 px-2">
        <span className="text-lg font-medium text-gray-500">{number}</span>
      </div>

      {/* Pokemon Silhouette */}
      <div className="flex items-center justify-center">
        <div>
          {/* Pokémon silhouette shape */}
          <img
            className="w-[72px] h-[72px] rounded-lg flex -top-6 z-20 relative lg:w-[150px] lg:h-[150px]"
            src="/images/default-pokemon.svg"
            alt=""
          />
        </div>
      </div>

      {/* Pokemon Name */}
      <div className="w-full text-center bg-[#EFEFEF] absolute bottom-0 rounded-t-lg pt-6 pb-1 rounded-lg">
        <h3 className="text-xl font-normal capitalize">{name}</h3>
      </div>
    </Link>
  );
}

interface PokemonCardParams {
  number: string;
  name: string;
}
export default function PokemonCard({ number, name }: PokemonCardParams) {
  return (
    <div className="relative rounded-lg min-w-[104px] min-h-[120px] bg-white shadow-lg flex flex-col items-center justify-between">
      {/* Pokemon Number */}
      <div className="w-full flex justify-end">
        <span className="text-lg font-medium text-gray-500">{number}</span>
      </div>

      {/* Pokemon Silhouette */}
      <div className="flex items-center justify-center">
        <div>
          {/* Pokémon silhouette shape */}
          <img
            className="w-[72px] h-[72px] rounded-lg flex -top-6 z-20 relative"
            src="/images/default-pokemon.svg"
            alt=""
          />
        </div>
      </div>

      {/* Pokemon Name */}
      <div className="w-full text-center bg-[#EFEFEF] absolute bottom-0 rounded-t-lg pt-6 pb-1 rounded-lg">
        <h3 className="text-xl font-normal capitalize">{name}</h3>
      </div>
    </div>
  );
}

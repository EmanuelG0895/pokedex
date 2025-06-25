export default function CardTeam({ team }: { team: any }) {
  return (
    <div className="break-inside-avoid mb-4 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer grid grid-cols-2 gap-2 p-2 h-auto">
      <h3 className="col-span-1 text-center">{team.name}</h3>
      <button className="cursor-pointer col-span-1 text-center">Editar</button>
      <div className="bg-bug w-full h-full flex items-center justify-center col-span-1 rounded-lg">
        <img
          src="/images/default-pokemon.svg"
          width={100}
          height={100}
          alt="pokemon-image"
        />
      </div>
    </div>
  );
}

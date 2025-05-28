export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <img
        src="/icons/pokeball.svg"
        alt="Cargando..."
        className="animate-spin h-12 w-12"
      />
      Espera un momento entrenador estamos hablando con el profesor...
    </div>
  );
}
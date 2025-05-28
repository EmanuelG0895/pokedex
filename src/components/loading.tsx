interface LoadingProps {
  message: string;
}
export default function Loading({ message }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <img
        src="/icons/pokeball.svg"
        alt="Cargando..."
        className="animate-spin h-12 w-12 mb-5"
      />
      {message}
    </div>
  );
}

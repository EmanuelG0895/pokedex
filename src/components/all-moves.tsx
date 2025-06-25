import { getPokemonDetail } from "@/utils/getPokemonDetail";
import { useEffect, useState, useRef } from "react";

interface VersionGroupDetail {
  level: number;
  method: string;
  version: string;
}

interface Move {
  name: string;
  methods: VersionGroupDetail[];
}

const BATCH_SIZE = 30;

export default function AllMoves({ name }: { name: string }) {
  const [moves, setMoves] = useState<Move[]>([]);
  const [flatRows, setFlatRows] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMoves = async () => {
      const { moves } = await getPokemonDetail(name);
      setMoves(moves);
    };
    fetchMoves();
  }, [name]);

  // Aplana los movimientos para la tabla
  useEffect(() => {
    const rows: any[] = [];
    moves.forEach((move) => {
      if (move.methods && move.methods.length > 0) {
        move.methods.forEach((detail) => {
          rows.push({
            name: move.name,
            method: detail.method,
            level: detail.level,
            version: detail.version,
          });
        });
      } else {
        rows.push({
          name: move.name,
          method: "-",
          level: "-",
          version: "-",
        });
      }
    });
    setFlatRows(rows);
    setVisibleCount(BATCH_SIZE); // Reinicia el conteo al cambiar de Pokémon
  }, [moves]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const container = tableContainerRef.current;
      if (!container) return;
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        setVisibleCount((prev) =>
          prev + BATCH_SIZE > flatRows.length ? flatRows.length : prev + BATCH_SIZE
        );
      }
    };
    const container = tableContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [flatRows.length]);

  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div
        ref={tableContainerRef}
        style={{ maxHeight: 400, overflowY: "auto", width: "100%" }}
        className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        <table className="min-w-[350px] border border-gray-300 rounded shadow text-xs md:text-base w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-1 border-b border-gray-300 text-left">Movimiento</th>
              <th className="px-2 py-1 border-b border-gray-300 text-left">Método</th>
              <th className="px-2 py-1 border-b border-gray-300 text-left">Nivel</th>
              <th className="px-2 py-1 border-b border-gray-300 text-left">Versión</th>
            </tr>
          </thead>
          <tbody>
            {flatRows.slice(0, visibleCount).map((row, idx) => (
              <tr key={`${row.name}-${row.method}-${row.version}-${idx}`} className="hover:bg-gray-50">
                <td className="px-2 py-1 border-b border-gray-200 capitalize">{row.name}</td>
                <td className="px-2 py-1 border-b border-gray-200 capitalize">{row.method}</td>
                <td className="px-2 py-1 border-b border-gray-200">{row.level}</td>
                <td className="px-2 py-1 border-b border-gray-200 capitalize">{row.version}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {visibleCount < flatRows.length && (
          <div className="text-center py-2 text-gray-500 text-xs">Loading more moves...</div>
        )}
      </div>
    </main>
  );
}

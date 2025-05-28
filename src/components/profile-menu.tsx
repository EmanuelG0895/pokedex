"use client";
"use client";
import { useSession } from "next-auth/react";

export default function ProfileMenu() {
  const { data: session } = useSession();

  return (
    <details className="relative">
      <summary className="flex items-center justify-center cursor-pointer px-2 py-1 rounded">
        <img
          className="rounded-full w-10 h-10 mr-4"
          src={session?.user?.image ?? "/images/pokeball-white.svg"}
          alt="User Avatar"
        />
        <h1 className="font-bold text-white text-xl md:text-3xl">
          {session?.user?.name || "Pokédex"}
        </h1>
      </summary>
      <ul className="absolute mt-2 bg-white border rounded shadow-md z-10 text-sm">
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Opción 1
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Opción 2
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Opción 3
          </a>
        </li>
      </ul>
    </details>
  );
}

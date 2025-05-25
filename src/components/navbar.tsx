import { auth } from "@/auth";
import { SignOut } from "./login/signout-button";
import Link from "next/link";
import { SignIn } from "./login/signin-button";

async function Navbar() {
  const session = await auth();
  return (
    <>
      <div className="flex justify-between p-2.5 bg-white text-black rounded-lg items-center">
        <details className="relative">
          <summary className="flex items-center space-x-2 cursor-pointer px-2 py-1 rounded hover:bg-gray-100">
            <img
              className="rounded-full w-10 h-10"
              src={session?.user?.image ?? "/icons/pokeball.svg"}
              alt="User Avatar"
            />
            <p className="text-sm font-medium">{session?.user?.name}</p>
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

        <div className="flex space-x-3.5 items-center">
          <Link href="/">
            <p className="cursor-pointer hover:underline">Home</p>
          </Link>
          <Link href="/">
            <p className="cursor-pointer hover:underline">Favoritos</p>
          </Link>
        </div>

        {session ? <SignOut /> : <SignIn />}
      </div>
    </>
  );
}

export default Navbar;

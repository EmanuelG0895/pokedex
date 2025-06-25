"use client";
import Link from "next/link";
import ProfileMenu from "./profile-menu";
import SearchBar from "./search-bar";
import { SignIn } from "./login/signin-button";
import { useSession } from "next-auth/react";
import { SignOut } from "./login/signout-button";

function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between p-2.5 bg-primary items-center">
      <ProfileMenu />
      <div className="flex space-x-3.5 items-center text-light">
        <Link href="/">
          <span className="flex items-center gap-2 cursor-pointer text-white">
            <p className="hidden md:block hover:underline">Home</p>
            <img className="block md:hidden " src="icons/home.svg" alt="Home" />
          </span>
        </Link>
        <Link href="/my-pokemon/favorites">
          <span className="flex items-center gap-2 cursor-pointer text-white">
            <p className="hidden md:block hover:underline">Favoritos</p>
            <img className="block md:hidden " src="icons/home.svg" alt="Home" />
          </span>
        </Link>
        <Link href="/my-pokemon/teams">
          <span className="flex items-center gap-2 cursor-pointer text-white">
            <p className="hidden md:block hover:underline">Equipos</p>
            <img className="block md:hidden " src="icons/home.svg" alt="Home" />
          </span>
        </Link>
        {session ? <SignOut /> : <SignIn />}
      </div>
      <SearchBar />
    </div>
  );
}

export default Navbar;

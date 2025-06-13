"use client";
import Link from "next/link";
import ProfileMenu from "./profile-menu";
import SearchBar from "./search-bar";
import { SignIn } from "./login/signin-button";
import { useSession } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();
  console.log(session)
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
        <Link href="/">
          <span className="flex items-center gap-2 cursor-pointer">
            <p className="hidden md:block hover:underline">Favoritos</p>
            <img
              className="block md:hidden"
              src="icons/favorite-filled.svg"
              alt="Home"
            />
          </span>
        </Link>
        <SignIn />
      </div>
      <SearchBar />
    </div>
  );
}

export default Navbar;

"use client";
import Link from "next/link";
import ProfileMenu from "./profile-menu";
import SearchBar from "./search-bar";
import { SignIn } from "./login/signin-button";

function Navbar() {
  return (
    <div className="flex justify-between p-2.5 bg-primary items-center ">
      <ProfileMenu />
      <div className="flex space-x-3.5 items-center text-light">
        <Link href="/">
          <p className="cursor-pointer hover:underline">Home</p>
        </Link>
        <Link href="/">
          <p className="cursor-pointer hover:underline">Favoritos</p>
        </Link>
        <SignIn />
      </div>
      <div className="w-xs md:w-xs">
        <SearchBar />
      </div>
    </div>
  );
}

export default Navbar;

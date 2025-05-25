import { auth } from "@/auth";
import { SignOut } from "./login/signout-button";
import Link from "next/link";
import { SignIn } from "./login/signin-button";

async function Navbar() {
  const session = await auth();
  return (
    <div className="flex justify-between p-2.5 bg-white text-black rounded-lg items-center">
      <div>
        <img
          className="rounded-full w-12 h-12"
          src={session?.user?.image ?? "/icons/pokeball.svg"}
          alt="User Avatar"
        />
        <p>{session?.user?.name}</p>
      </div>
      <div className="flex space-x-3.5">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/">
          <p>Favoritos</p>
        </Link>
      </div>
      <SignIn />
    </div>
  );
}

export default Navbar;

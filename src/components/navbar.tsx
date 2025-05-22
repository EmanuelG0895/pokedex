import { auth } from "@/auth";

async function Navbar() {
  const session = await auth();
  if (!session?.user) return null;
  return (
    <div className="flex items-center">
      <img
        className="rounded-full"
        src={session.user.image ?? undefined}
        alt="User Avatar"
      />
      <p>{session.user.name}</p>
    </div>
  );
}

export default Navbar;

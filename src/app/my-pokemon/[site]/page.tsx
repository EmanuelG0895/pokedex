"use client";
import FavoriteSection from "@/components/favorite-section";
import Navbar from "@/components/navbar";
import TeamSection from "@/components/team-seccion";
import { use } from "react";

function Page({ params }: { params: Promise<{ site: string }> }) {
  const { site } = use(params);
  return (
    <>
      <Navbar />
      <main className="custom-scrollbar h-[calc(100svh-100px)] inset-shadow-sm grid grid-cols-1 px-2.5 py-4 md:grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] justify-items-center rounded-lg bg-white mx-4 overflow-auto">
        {site === "favorites" && <FavoriteSection />}
        {site === "teams" && <TeamSection />}
      </main>
    </>
  );
}

export default Page;

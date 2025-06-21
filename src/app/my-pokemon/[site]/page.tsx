"use client";
import FavoriteSection from "@/components/favorite-section";
import Navbar from "@/components/navbar";
import { use } from "react";

function Page({ params }: { params: Promise<{ site: string }> }) {
  const { site } = use(params);
  return (
    <>
      <Navbar />
      <section className="custom-scrollbar h-[calc(100svh-100px)] inset-shadow-sm grid grid-cols-1 gap-2 md:gap-y-4 px-2.5 py-7 md:grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] justify-items-center rounded-lg bg-white mx-4 overflow-auto">
        {site === "favorites" && <FavoriteSection />}
        {site === "teams" && <div>Equipos</div>}
      </section>
    </>
  );
}

export default Page;

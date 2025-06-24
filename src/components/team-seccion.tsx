import React from "react";
import CardTeam from "./team/card-team";
import CreateTeam from "./team/create-team";

export default function TeamSection() {
  return (
    <main className="flex flex-col w-full items-start">
      <CreateTeam />
      <div className="grid grid-cols-5 gap-4 w-full grid-rows-3 mt-2">

      </div>
    </main>
  );
}

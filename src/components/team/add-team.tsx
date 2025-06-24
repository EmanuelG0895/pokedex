import React, { useEffect, useState } from "react";

export default function AddTeam() {
  return (
    <div className="flex flex-col items-center justify-center">
      <button className="bg-primary text-white px-4 py-2 rounded-md">
        <img src="/icons/pokeball-white.svg" alt="Add team" />
      </button>
    </div>
  );
}

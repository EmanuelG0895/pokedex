import React, { useEffect, useState } from "react";

export default function TeamList() {
  const [teamList, setTeamList] = useState<any[]>([]);
  useEffect(() => {
    const storedTeams = localStorage.getItem("team");
    if (storedTeams) {
      setTeamList(JSON.parse(storedTeams));
    }
  }, []);
  return (
    <details className="relative group">
      <summary className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer flex items-center justify-center">
        <img
          src="/icons/pokeball-white.svg"
          className="min-w-9 min-h-9"
          alt="Add team"
        />
      </summary>
      <ul className="absolute z-10 mt-2 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-md p-2 w-40 space-y-2">
        {teamList.map((team, index) => (
          <li key={index} className="hover:bg-gray-100 px-2 py-1 rounded">
            {team.name}
          </li>
        ))}
      </ul>
    </details>
  );
}

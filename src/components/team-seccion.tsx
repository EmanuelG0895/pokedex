import React, { useEffect, useState } from "react";
import CardTeam from "./team/card-team";
import CreateTeam from "./team/create-team";
import Modal from "./ui/modal";

export default function TeamSection() {
  const [teamList, setTeamList] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const storedTeams = localStorage.getItem("team");
    if (storedTeams) {
      try {
        const parsedTeams = JSON.parse(storedTeams);
        setTeamList(Array.isArray(parsedTeams) ? parsedTeams : [parsedTeams]);
      } catch (error) {
        console.error("Error parsing teams from localStorage:", error);
        setTeamList([]);
      }
    }
  }, [isOpen]);
  const handleModal = () => {
    setIsOpen(true);
  };
  return (
    <main className="flex flex-col w-full items-start">
      <button
        onClick={handleModal}
        className="bg-primary text-white p-4 rounded-lg font-bold items-center text-lg"
      >
        Create Team +
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CreateTeam />
      </Modal>
      <section className="flex gap-4 mt-4">
        {teamList.map((team, index) => (
          <CardTeam key={index} team={team} />
        ))}
      </section>
    </main>
  );
}

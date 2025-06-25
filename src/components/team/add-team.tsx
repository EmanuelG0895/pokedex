import { useEffect, useState } from "react";
import Modal from "../ui/modal";
import CreateTeam from "./create-team";
import TeamList from "./team-list";

export default function AddTeam({ pokemonName }: { pokemonName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [teamList, setTeamList] = useState<any[]>([]);
  const handleClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const storedTeams = localStorage.getItem("team");
    if (storedTeams) {
      setTeamList(JSON.parse(storedTeams));
    } else {
      setTeamList([]);
    }
  }, [isOpen]);

  return (
    <>
      {teamList.length > 0 ? (
        <TeamList />
      ) : (
        <>
          <button
            className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer flex items-center justify-center"
            onClick={handleClick}
          >
            <img
              src="/icons/pokeball-white.svg"
              className="min-w-9 min-h-9"
              alt="Add team"
            />
          </button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <CreateTeam />
          </Modal>
        </>
      )}
    </>
  );
}

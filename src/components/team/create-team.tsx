import React, { useState, useEffect } from "react";
import Modal from "../ui/modal";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import FloatingLabel from "../ui/floating-label";
import CardTeam from "./card-team";

interface Inputs {
  name: string;
}

export default function CreateTeam() {
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
  }, []);

  const handleModal = () => {
    setIsOpen(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newTeam = { ...data, id: Date.now() };
    const updatedTeams = [...teamList, newTeam];
    localStorage.setItem("team", JSON.stringify(updatedTeams));
    setTeamList(updatedTeams);
    setIsOpen(false);
    reset();
  };

  return (
    <main>
      <button
        onClick={handleModal}
        className="bg-primary text-white p-4 rounded-lg font-bold items-center text-lg"
      >
        Create Team +
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <h1 className="text-2xl font-bold">Create Team</h1>
          <FloatingLabel
            label="Nombre del equipo"
            error={!!errors.name}
            helperText={errors.name?.message}
            id="name"
            {...register("name", {
              required: "Agrega un nombre para tu equipo",
            })}
          />
          <div className="flex flex-row justify-between">
            <Link
              href="/"
              className="bg-water text-white p-2 rounded-md font-bold mt-2"
            >
              Add Pokemon
            </Link>
            <button
              type="submit"
              className="bg-primary text-white p-2 rounded-md font-bold mt-2"
            >
              Create
            </button>
          </div>
        </form>
      </Modal>

      <section className="flex gap-4 mt-4">
        {teamList.map((team, index) => (
          <CardTeam key={index} team={team} />
        ))}
      </section>
    </main>
  );
}

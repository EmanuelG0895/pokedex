import React, { useState } from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import FloatingLabel from "../ui/floating-label";
import ToastSuccess from "../ui/toast";

interface Inputs {
  name: string;
}

export default function CreateTeam() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [toast, setToast] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const storedTeams = localStorage.getItem("team");
    const newTeam = { ...data, id: Date.now() };
    if (storedTeams) {
      const parsedTeams = JSON.parse(storedTeams);
      const updatedTeams = [...parsedTeams, newTeam];
      localStorage.setItem("team", JSON.stringify(updatedTeams));
      setToast(true);
    } else {
      localStorage.setItem("team", JSON.stringify([newTeam]));
      setToast(true);
    }
    reset();
  };

  return (
    <main>
      {toast && (
        <ToastSuccess message="Equipo creado correctamente"/>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <h1 className="text-2xl font-bold">Create Team</h1>
        <FloatingLabel
          label="Nombre del equipo"
          error={!!errors.name}
          errorMessage={errors.name?.message}
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
    </main>
  );
}

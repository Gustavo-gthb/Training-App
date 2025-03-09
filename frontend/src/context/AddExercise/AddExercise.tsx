import { createContext, useEffect, useState } from "react";

type Exercise = {
  id: number;
  name: string;
};

type ExerciseContextType = {
  exercises: { [training: string]: Exercise[] };
  addExercise: (training: string, exerciseName: string) => void;
  removeExercise: (training: string, exerciseId: number) => void;
};

const AddExerciseContext = createContext<ExerciseContextType | undefined>(
  undefined
);

export const AddExerciseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [exercises, setexercises] = useState<{
    [training: string]: Exercise[];
  }>(() => {
    const storedExercises = localStorage.getItem("Exercises");

    return storedExercises ? JSON.parse(storedExercises) : [];
  });

  useEffect(() => {
    localStorage.setItem("Exercises", JSON.stringify(exercises));
  }, [exercises]);

  const addExercise = (training: string, exerciseName: string) => {
    setexercises((prev) => ({
      ...prev,
      [training]: [
        ...(prev[training] || []),
        { id: Date.now(), name: exerciseName },
      ],
    }));
  };

  const removeExercise = (training: string, exerciseId: number) => {
    setexercises((prev) => ({
      ...prev,
      [training]:
        prev[training]?.filter((exercise) => exercise.id !== exerciseId) || [],
    }));
  };

  console.log(exercises);

  return (
    <AddExerciseContext.Provider
      value={{ exercises, addExercise, removeExercise }}
    >
      {children}
    </AddExerciseContext.Provider>
  );
};

export default AddExerciseContext;
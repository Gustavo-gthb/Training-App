import { createContext, useEffect, useState } from "react";

type TrainingContextType = {
  trainings: string[];
  addTraining: (newTraining: string) => void;
  removeTraining: (index: number) => void;
};

const AddTrainingContext = createContext<TrainingContextType | undefined>(
  undefined
);

export const AddTrainingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [trainings, setTrainings] = useState<string[]>(() => {
    const storedTrainings = localStorage.getItem("trainings");

    return storedTrainings ? JSON.parse(storedTrainings) : [];
  });

  useEffect(() => {
    localStorage.setItem("trainings", JSON.stringify(trainings));
  }, [trainings]);

  const addTraining = (newTraining: string) => {
    setTrainings((prev) => [...prev, newTraining]);
  };

  const removeTraining = (index: number) => {
    setTrainings((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <AddTrainingContext.Provider
      value={{ trainings, addTraining, removeTraining }}
    >
      {children}
    </AddTrainingContext.Provider>
  );
};

export default AddTrainingContext;

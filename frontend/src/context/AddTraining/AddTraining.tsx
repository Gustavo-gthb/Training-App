import { createContext, useEffect, useState } from "react";

type Training = {
  id: number;
  name: string;
}

type TrainingContextType = {
  trainings: Training[];
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
  const [trainings, setTrainings] = useState<Training[]>(() => {
    const storedTrainings = localStorage.getItem("trainings");

    return storedTrainings ? JSON.parse(storedTrainings) : [];
  });

  useEffect(() => {
    localStorage.setItem("trainings", JSON.stringify(trainings));
  }, [trainings]);

  const addTraining = (newTraining: string) => {
    setTrainings((prev) => [
      ...prev,
      { id: prev.length + 1, name: newTraining },
    ]);
  };

  const removeTraining = (id: number) => {
    setTrainings((prev) => prev.filter((training) => training.id !== id));
  };

  console.log(trainings);

  return (
    <AddTrainingContext.Provider
      value={{ trainings, addTraining, removeTraining }}
    >
      {children}
    </AddTrainingContext.Provider>
  );
};

export default AddTrainingContext;
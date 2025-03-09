import { ChangeEvent, createContext, useState } from "react";

type CreateExerciseType = {
  inputValueExercise: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setInputValueExercise: (value: string) => void;
  clearInput: () => void;
};

const CreateExerciseContext = createContext<CreateExerciseType | undefined>(
  undefined
);

export const CreateExerciseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [inputValueExercise, setInputValueExercise] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValueExercise(e.target.value);
  };

  const clearInput = () => {
    setInputValueExercise("");
  }

  return (
    <CreateExerciseContext.Provider
      value={{ inputValueExercise, handleChange, setInputValueExercise, clearInput }}
    >
      {children}
    </CreateExerciseContext.Provider>
  );
};

export default CreateExerciseContext;

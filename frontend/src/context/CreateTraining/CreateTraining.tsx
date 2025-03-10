import { ChangeEvent, createContext, useState } from "react";

type CreateTrainingType = {
  inputValueTraining: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setInputValueTraining: (value: string) => void;
  clearInput: () => void;
};

const CreateTrainingContext = createContext<CreateTrainingType | undefined>(
  undefined
);

export const CreateTrainingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [inputValueTraining, setInputValueTraining] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValueTraining(e.target.value);
  };

  const clearInput = () => {
    setInputValueTraining("");
  };

  return (
    <CreateTrainingContext.Provider
      value={{
        inputValueTraining,
        handleChange,
        setInputValueTraining,
        clearInput,
      }}
    >
      {children}
    </CreateTrainingContext.Provider>
  );
};

export default CreateTrainingContext;

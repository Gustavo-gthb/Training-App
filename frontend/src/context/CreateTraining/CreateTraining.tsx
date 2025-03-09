import { ChangeEvent, createContext, useState } from "react";

type CreateTrainingType = {
  inputValueTraining: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setInputValueTraining: (value: string) => void;
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

  return (
    <CreateTrainingContext.Provider
      value={{ inputValueTraining, handleChange, setInputValueTraining }}
    >
      {children}
    </CreateTrainingContext.Provider>
  );
};

export default CreateTrainingContext;

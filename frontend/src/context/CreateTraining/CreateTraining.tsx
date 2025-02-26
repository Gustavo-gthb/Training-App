import { ChangeEvent, createContext, useState } from "react";

type CreateTrainingType = {
  inputValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CreateTrainingContext = createContext<CreateTrainingType | undefined>(
  undefined
);

export const CreateTrainingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <CreateTrainingContext.Provider value={{ inputValue, handleChange }}>
      {children}
    </CreateTrainingContext.Provider>
  );
};

export default CreateTrainingContext;

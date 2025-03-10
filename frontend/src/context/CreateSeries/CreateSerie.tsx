import { ChangeEvent, createContext, useState } from "react";

type CreateSeriesType = {
  inputValueSeries: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearInput: () => void;
};

const CreateSeriesContext = createContext<CreateSeriesType | undefined>(
  undefined
);

export const CreateSeriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [inputValueSeries, setInputValueSeries] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValueSeries(e.target.value);
  };

  const clearInput = () => {
    setInputValueSeries("");
  };

  return (
    <CreateSeriesContext.Provider
      value={{ inputValueSeries, handleChange, clearInput }}
    >
      {children}
    </CreateSeriesContext.Provider>
  );
};

export default CreateSeriesContext;

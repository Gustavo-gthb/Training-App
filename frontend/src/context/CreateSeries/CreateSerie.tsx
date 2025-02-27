import { ChangeEvent, createContext, useState } from "react";

type CreateSeriesType = {
  inputValueSeries: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
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

  return (
    <CreateSeriesContext.Provider value={{ inputValueSeries, handleChange }}>
      {children}
    </CreateSeriesContext.Provider>
  );
};

export default CreateSeriesContext;

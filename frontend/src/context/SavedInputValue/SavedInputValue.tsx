import { createContext, useEffect, useState } from "react";

type SavedInputValueType = {
  values: string[];
  addValue: (newValue: string) => void;
  removeValue: (index: number) => void;
};

const SavedInputValueContext = createContext<SavedInputValueType | undefined>(
  undefined
);

export const SavedInputValueProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [values, setValues] = useState<string[]>(() => {
    const storedValues = localStorage.getItem("values");
    return storedValues ? JSON.parse(storedValues) : [];
  });

  console.log(values);

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  const addValue = (newValue: string) => {
    setValues((prev) => [...prev, newValue]);
  };

  const removeValue = (index: number) => {
    setValues((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <SavedInputValueContext.Provider value={{ values, addValue, removeValue }}>
      {children}
    </SavedInputValueContext.Provider>
  );
};

export default SavedInputValueContext;

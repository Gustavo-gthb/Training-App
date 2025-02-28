import React, { createContext, useState, useEffect } from "react";

interface SeriesContextType {
  data: { reps: string[]; weight: number[] };
  addSeries: (newreps: string, newWeight: number) => void;
  removeSeries: (index: number) => void;
}

const AddSeriesContext = createContext<SeriesContextType | undefined>(
  undefined
);

export const AddSeriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<{ reps: string[]; weight: number[] }>(() => {
    const storedData = localStorage.getItem("seriesData");

    return storedData ? JSON.parse(storedData) : { reps: [], weight: [] };
  });

  useEffect(() => {
    localStorage.setItem("seriesData", JSON.stringify(data));
  }, [data]);

  const addSeries = (newReps: string, newWeight: number) => {
    setData((prev) => ({
      ...prev,
      reps: [...prev.reps, newReps],
      weight: [...prev.weight, newWeight],
    }));
  };

  const removeSeries = (index: number) => {
    setData((prev) => ({
      ...prev,
      reps: prev.reps.filter((_, i) => i !== index),
      weight: prev.weight.filter((_, i) => i !== index),
    }));
  };

  return (
    <AddSeriesContext.Provider value={{ data, addSeries, removeSeries }}>
      {children}
    </AddSeriesContext.Provider>
  );
};

export default AddSeriesContext;

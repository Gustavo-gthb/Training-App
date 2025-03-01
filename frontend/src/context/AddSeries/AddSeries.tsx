import React, { createContext, useState, useEffect } from "react";

interface SeriesContextType {
  data: {
    [exercise: string]: { reps: string[]; weight: number[] };
  };
  addSeries: (exercise: string, newreps: string, newWeight: number) => void;
  removeSeries: (exercise: string, index: number) => void;
}

const AddSeriesContext = createContext<SeriesContextType | undefined>(
  undefined
);

export const AddSeriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<{
    [exercise: string]: { reps: string[]; weight: number[] };
  }>(() => {
    const storedData = localStorage.getItem("seriesData");

    return storedData ? JSON.parse(storedData) : {};
  });

  useEffect(() => {
    localStorage.setItem("seriesData", JSON.stringify(data));
  }, [data]);

  const addSeries = (exercise: string, newReps: string, newWeight: number) => {
    setData((prev) => ({
      ...prev,
      [exercise]: {
        reps: [...(prev[exercise]?.reps || []), newReps],
        weight: [...(prev[exercise]?.weight || []), newWeight],
      },
    }));
  };

  const removeSeries = (exercise: string, index: number) => {
    setData((prev) => ({
      ...prev,
      [exercise]: {
        reps: prev[exercise]?.reps.filter((_, i) => i !== index) || [],
        weight: prev[exercise]?.weight.filter((_, i) => i !== index) || [],
      },
    }));
  };

  console.log(data);

  return (
    <AddSeriesContext.Provider value={{ data, addSeries, removeSeries }}>
      {children}
    </AddSeriesContext.Provider>
  );
};

export default AddSeriesContext;

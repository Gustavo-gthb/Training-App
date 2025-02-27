import React, { createContext, useState, useEffect } from "react";

interface SeriesContextType {
  series: string[];
  addSeries: (newSeries: string) => void;
  removeSeries: (index: number) => void;
}

 const AddSeriesContext = createContext<SeriesContextType | undefined>(
  undefined
);

export const AddSeriesProvider = ({ children }: { children: React.ReactNode }) => {
  const [series, setSeries] = useState<string[]>(() => {
    const storedSeries = localStorage.getItem("series");

    return storedSeries ? JSON.parse(storedSeries) : [];
  });

  useEffect(() => {
    localStorage.setItem("series", JSON.stringify(series));
  }, [series]);

  const addSeries = (newSeries: string) => {
    setSeries((prev) => [...prev, newSeries]);
  };

  const removeSeries = (index: number) => {
    setSeries((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <AddSeriesContext.Provider value={{ series, addSeries, removeSeries }}>
      {children}
    </AddSeriesContext.Provider>
  );
};

export default AddSeriesContext;

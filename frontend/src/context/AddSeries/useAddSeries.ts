import { useContext } from "react";
import AddSeriesContext from "./AddSeries";

const useAddSeries = () => {
  const context = useContext(AddSeriesContext);
  if (!context) {
    throw new Error("useAddSeries dever ser usado dentro de um provider");
  }
  return context;
};

export default useAddSeries;

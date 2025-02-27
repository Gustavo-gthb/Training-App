import { useContext } from "react";
import CreateSeriesContext from "./CreateSerie";

const useCreateSerie = () => {
  const context = useContext(CreateSeriesContext);
  if (!context) {
    throw new Error(
      "O componente useCreateSerie deve ser utilizado em um provider"
    );
  }
  return context;
};

export default useCreateSerie;

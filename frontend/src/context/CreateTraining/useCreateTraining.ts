import { useContext } from "react";
import CreateTrainingContext from "./CreateTraining";

const useCreateTraining = () => {
  const context = useContext(CreateTrainingContext);
  if (!context) {
    throw new Error(
      "o componente useCreteTraining deve ser utilizado em um provider"
    );
  }
  return context;
};

export default useCreateTraining;

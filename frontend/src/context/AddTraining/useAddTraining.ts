import { useContext } from "react";
import AddTrainingContext from "./AddTraining";

const useAddTraining = () => {
  const context = useContext(AddTrainingContext);
  if (!context) {
    throw new Error("useAddTraining deve ser usado dentro de um provider");
  }
  return context;
};
export default useAddTraining;
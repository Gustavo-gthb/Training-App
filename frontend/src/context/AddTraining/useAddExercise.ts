import { useContext } from "react";
import AddTrainingContext from "./AddExercise";

const useAddExercise = () => {
  const context = useContext(AddTrainingContext);
  if (!context) {
    throw new Error("useAddExercise deve ser usado dentro de um provider");
  }
  return context;
};
export default useAddExercise;

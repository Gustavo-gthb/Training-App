import { useContext } from "react";
import AddExerciseContext from "./AddExercise";


const useAddExercise = () => {
  const context = useContext(AddExerciseContext);
  if (!context) {
    throw new Error("useAddExercise deve ser usado dentro de um provider");
  }
  return context;
};
export default useAddExercise;
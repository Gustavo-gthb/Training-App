import { useContext } from "react";
import CreateExerciseContext from "./CreateExercise";


const useCreateExercise = () => {
  const context = useContext(CreateExerciseContext);
  if (!context) {
    throw new Error(
      "o componente useCreteTraining deve ser utilizado em um provider"
    );
  }
  return context;
};

export default useCreateExercise;

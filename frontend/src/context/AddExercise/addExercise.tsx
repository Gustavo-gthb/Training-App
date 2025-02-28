 import { createContext, useEffect, useState } from "react";

 type Exercise = {
   id: number;
   name: string;
 }
 
 type ExerciseContextType = {
   exercises: Exercise[];
   addExercise: (newExercise: string) => void;
   removeExercise: (index: number) => void;
 };
 
 const AddExerciseContext = createContext<ExerciseContextType | undefined>(
   undefined
 ); 
 
 export const AddExerciseProvider = ({ 
   children,
 }: {
   children: React.ReactNode; 
 }) => {
   const [exercises, setexercises] = useState<Exercise[]>(() => {
     const storedExercises = localStorage.getItem("Exercises");
 
     return storedExercises ? JSON.parse(storedExercises) : [];
   });
 
   useEffect(() => {
     localStorage.setItem("Exercises", JSON.stringify(exercises));
   }, [exercises]);
 
   const addExercise = (newExercise: string) => {
     setexercises((prev) => [
       ...prev,
       { id: prev.length + 1, name: newExercise },
     ]);
   };
 
   const removeExercise = (id: number) => {
     setexercises((prev) => prev.filter((exercise) => exercise.id !== id));
   };
 
   console.log(exercises);
 
   return (
     <AddExerciseContext.Provider
       value={{ exercises, addExercise, removeExercise }}
     >
       {children}
     </AddExerciseContext.Provider>
   );
 };
 
 export default AddExerciseContext;
 
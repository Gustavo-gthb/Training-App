import Button from "../../../components/Button";
import Rectangle from "../../../components/Rectangle/Rectangle";
import { useState } from "react";
import { Container } from "./style";
import Modal from "./Modal";
import { useNavigate, useParams } from "react-router";
import useAddExercise from "../../../context/AddExercise/useAddExercise";
import Border from "../../../components/Border";
import { AnimatePresence } from "framer-motion";

const Exercise = () => {
  const { trainingName } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { exercises, removeExercise } = useAddExercise();
  const navigate = useNavigate();

  const currentExercises = exercises[trainingName ?? ""] || [];

  return (
    <Container>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        text="Digite o exercicio:"
        trainingName={trainingName}
      />

      <h2>Exercicios de {trainingName}</h2>

      <Border>
        <AnimatePresence mode="popLayout">
          {currentExercises.map((exercise) => (
            <Rectangle
              handleClickNext={() => navigate(`/series/${exercise.name}`)}
              handleClickDelet={() =>
                removeExercise(trainingName ?? "", exercise.id)
              }
              key={exercise.id}
            >
              {exercise.name}
            </Rectangle>
          ))}
        </AnimatePresence>
      </Border>
      <Button onClick={() => setIsModalOpen(true)}>Adicionar Exercicio</Button>
    </Container>
  );
};
export default Exercise;

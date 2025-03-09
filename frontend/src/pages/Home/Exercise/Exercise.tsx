import Button from "../../../components/Button";
import Rectangle from "../../../components/Rectangle/Rectangle";
import { useState } from "react";
import { Container } from "./style";
import Modal from "./Modal";
import { useNavigate, useParams } from "react-router";
import useAddExercise from "../../../context/AddExercise/useAddExercise";

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

        {currentExercises.map((exercise) => (
          <>
            <Rectangle
              onClick={() => navigate(`/series/${exercise.name}`)}
              key={exercise.id}
            >
              {exercise.name}
            </Rectangle>

            <Button
              onClick={() => removeExercise(trainingName ?? "", exercise.id)}
            >
              aaaa
            </Button>
          </>
        ))}
      <Button onClick={() => setIsModalOpen(true)}>Adicionar Exercicio</Button>
    </Container>
  );
};
export default Exercise;

import Border from "../../../components/Border";
import Button from "../../../components/Button";
import Rectangle from "../../../components/Rectangle/Rectangle";
import { useState } from "react";
import { Container } from "./style";
import Modal from "./Modal";
import { useNavigate, useParams } from "react-router";
import useAddExercise from '../../../context/AddExercise/useAddExercise';
import { RemoveButton } from "../Train/style";

const Exercise = () => {
  const { trainingName } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {exercises, removeExercise} = useAddExercise();
  const navigate = useNavigate();

  console.log(isModalOpen);
 
  return (
    <Container>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        text="Digite o exercicio:"
      />

      <h2>Exercicios de {trainingName}</h2>

      <Border>
        {exercises.map((exercise) => (
          <>
          <Rectangle onClick={() => navigate(`/series/${exercise.name}`)} key={exercise.id}>
            {exercise.name}
          </Rectangle>

          <RemoveButton onClick={() => removeExercise(exercise.id)}>aaaa</RemoveButton>
          </>
        ))}
      </Border>
      <Button onClick={() => setIsModalOpen(true)}>Adicionar Exercicio</Button>
    </Container>
  );
};

export default Exercise;

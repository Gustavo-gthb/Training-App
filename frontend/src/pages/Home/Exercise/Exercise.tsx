import Border from "../../../components/Border";
import Button from "../../../components/Button";
import Rectangle from "../../../components/Rectangle/Rectangle";
import { useState } from "react";
import { Container } from "./style";
import Modal from "./Modal";
import useCreateExercise from "../../../context/CreateExercise/useCreateExercise";
import { useNavigate } from "react-router";

const Exercise = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {inputValueExercise} = useCreateExercise()
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/series")
  }


  console.log(isModalOpen);

  return (
    <Container>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        text="Digite o grupamento muscular:"
      />
 
      <h2>Exercicios de peito</h2>

      <Border>
        <Rectangle onClick={handleClick} >{inputValueExercise}</Rectangle>
      </Border>
      <Button onClick={() => setIsModalOpen(true)}>Adicionar Exercicio</Button>
    </Container>
  );
};

export default Exercise;

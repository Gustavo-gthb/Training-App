import { Container } from "./style";
import Border from "../../../components/Border";
import Button from "../../../components/Button";
import Rectangle from "../../../components/Rectangle/Rectangle";
import { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router";
import useCreateTraining from "../../../context/CreateTraining/useCreateTraining";

const Train = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { inputValueTraining } = useCreateTraining();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/exercise");
  };

  console.log(isModalOpen);

  return (
    <Container>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        text="Digite o título do seu treino:"
      />

      <h2>Treino</h2>

      <Border>
        <Rectangle onClick={handleClick}>{inputValueTraining}</Rectangle>
      </Border>
      <Button onClick={() => setIsModalOpen(true)}>Criar Treino</Button>
    </Container>
  );
};

export default Train;

import { Container, RemoveButton } from "./style";
import Border from "../../../components/Border";
import Button from "../../../components/Button";
import Rectangle from "../../../components/Rectangle/Rectangle";
import { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router";
import useAddTraining from "../../../context/AddTraining/useAddTraining";

const Train = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { trainings, removeTraining } = useAddTraining();

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
        {trainings.map((training, index) => (
          <>
            <Rectangle onClick={handleClick} key={index}>
              {training}
            </Rectangle>

            <RemoveButton onClick={() => removeTraining(index)}>aaaaaa</RemoveButton>
          </>
        ))}
      </Border>
      <Button onClick={() => setIsModalOpen(true)}>Criar Treino</Button>
    </Container>
  );
};

export default Train;

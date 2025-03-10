import { Container } from "./style";
import Rectangle from "../../../components/Rectangle/Rectangle";
import { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router";
import useAddTraining from "../../../context/AddTraining/useAddTraining";
import Border from "../../../components/Border/Border";
import Button from "../../../components/Button";

const Train = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { trainings, removeTraining } = useAddTraining();

  const navigate = useNavigate();

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
        {trainings.map((training) => (
          <>
            <Rectangle
              handleClickNext={() => navigate(`/exercise/${training.name}`)}
              handleClickDelet={() => removeTraining(training.id)}
              key={training.id}
            >
              {training.name}
            </Rectangle>
          </>
        ))}
      </Border>
      <Button onClick={() => setIsModalOpen(true)}>Criar Treino</Button>
    </Container>
  );
};

export default Train;

import { Container, DeleteButton } from "./style";
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

  // const handleClick = () => {
  //   navigate(`/exercise/${trainings}`);
  // };

  console.log(isModalOpen);

  return (
    <Container>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        text="Digite o título do seu treino:"
      />

      <h2>Treinos</h2>

      <Border>
        {trainings.map((training) => (
          <>
            <Rectangle
              onClick={() => navigate(`/exercise/${training.name}`)}
              key={training.id}
            >
              {training.name}
            {/* <DeleteButton onClick={() => removeTraining(training.id)}>aaaa</DeleteButton> */}
            </Rectangle> 

          </>
        ))}
      </Border>
      <Button onClick={() => setIsModalOpen(true)}>adicionar</Button>
    </Container> 
  );
};

export default Train;

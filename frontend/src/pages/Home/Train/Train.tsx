import { Container } from "./style";
import Border from "../../../components/Border";
import Button from "../../../components/Button";
import Rectangle from '../../../components/Rectangle/Rectangle';
import { useState } from "react";
import Modal from "./Modal";

const Train = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  console.log(isModalOpen)

  return (
    <Container>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        a
      </Modal>
    

      <h2>Treino</h2>
 
      <Border>
        <Rectangle>
            texto
        </Rectangle>
      </Border>
      <Button onClick={() => setIsModalOpen(true)}>
          Criar Treino
      </Button>
    </Container>
  );
};

export default Train; 

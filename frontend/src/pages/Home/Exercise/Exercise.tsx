import Border from "../../../components/Border";
import Button from "../../../components/Button";
import Rectangle from "../../../components/Rectangle/Rectangle";
import { useState } from "react";
import { Container } from "./style";
import Modal from "../../../components/Modal";

const Exercise = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen);

  return (
    <Container>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} text="aaaa" />

      <h2>Exercicios de peito</h2>

      <Border>
        <Rectangle>texto</Rectangle>
      </Border>
      <Button onClick={() => setIsModalOpen(true)}>Adicionar Exercicio</Button>
    </Container>
  );
};

export default Exercise;

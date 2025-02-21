import React from "react";
import { Container } from "./style";
import Border from "../../../components/Border";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const Train = () => {
  return (
    <Container>

      <h2>Treino</h2>

      <Border>
        <Input></Input>
      </Border>
      <Button>
          Criar Treino
      </Button>
    </Container>
  );
};

export default Train;

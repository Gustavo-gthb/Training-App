import { Container } from "./style";
import Border from "../../../components/Border";
import Button from "../../../components/Button";
import useAddSeries from "../../../context/AddSeries/useAddSeries";
import { useState } from "react";
import Modal from "./Modal";
import Rectangle from "../../../components/Rectangle";
import { RemoveButton } from "../Train/style";

const Series = () => {
  const [isModoalOpen, setIsModalOpen] = useState(false);
  const { series, removeSeries, addSeries } = useAddSeries();

  return (
    <Container>
      <Modal
        isOpen={isModoalOpen}
        onClose={() => setIsModalOpen(false)}
        text="Digite o número de repetições:"
      />

      <h2>Séries de crucifixo</h2>

      <Border>
        {series.map((series, index) => (
          <>
            <Rectangle key={index}> {series}</Rectangle>
            <RemoveButton onClick={() => removeSeries(index)}>aaaa</RemoveButton>
          </> 
        ))}
      </Border>

      <Button onClick={() => setIsModalOpen(true)}>adicionar série</Button>
    </Container> 
  );
};

export default Series;

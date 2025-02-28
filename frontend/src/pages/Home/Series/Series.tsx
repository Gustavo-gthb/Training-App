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
  const { data, removeSeries} = useAddSeries();

  return (
    <Container>
      <Modal
        isOpen={isModoalOpen}
        onClose={() => setIsModalOpen(false)}
        text1="Digite o número de repetições:"
        text2="Digite o peso:"
        />

      <h2>Séries de crucifixo</h2> 

      <Border>
        {data.reps.map((reps, index) => (
          <>
            <Rectangle key={index}> reps:{reps} , peso:{data.weight[index]} Kg</Rectangle>
            <RemoveButton onClick={() => removeSeries(index)}>aaaa</RemoveButton>
          </> 
        ))}
      </Border>

      <Button onClick={() => setIsModalOpen(true)}>adicionar série</Button>
    </Container> 
  );
};

export default Series;

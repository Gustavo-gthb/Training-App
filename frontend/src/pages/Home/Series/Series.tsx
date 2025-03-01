import { Container } from "./style";
import Border from "../../../components/Border";
import Button from "../../../components/Button";
import useAddSeries from "../../../context/AddSeries/useAddSeries";
import { useState } from "react";
import Modal from "./Modal";
import Rectangle from "../../../components/Rectangle";
import { RemoveButton } from "../Train/style";
import { useParams } from "react-router";

const Series = () => {
  const { exerciseName } = useParams();
  const [isModoalOpen, setIsModalOpen] = useState(false);
  const { data, removeSeries } = useAddSeries();

  const series = data[exerciseName ?? ""] || { reps: [], weight: [] };

  return (
    <Container>
      <Modal
        isOpen={isModoalOpen}
        onClose={() => setIsModalOpen(false)}
        text1="Digite o número de repetições:"
        text2="Digite o peso:"
        exerciseName={exerciseName ?? ""}
      />

      <h2>Séries de {exerciseName}</h2>

      <Border>
        {series.reps.map((reps, index) => (
          <>
            <Rectangle key={index}>
              {" "}
              reps:{reps} , peso:{series.weight[index]} Kg
            </Rectangle>
            <RemoveButton onClick={() => removeSeries(exerciseName ?? "", index)}>
              aaaa
            </RemoveButton>
          </>
        ))}
      </Border>

      <Button onClick={() => setIsModalOpen(true)}>adicionar série</Button>
    </Container>
  );
};

export default Series;

import {
  Container,
  InputSeries,
  RepsContainer,
  SeriesContainer,
  WeightContainer,
} from "./style";
import Button from "../../../components/Button";
import useAddSeries from "../../../context/AddSeries/useAddSeries";
import { useState } from "react";
import Modal from "./Modal";
import { useParams } from "react-router";
import Border from "../../../components/Border";

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
            <SeriesContainer key={index}>
              <RepsContainer>
                Repetições: <InputSeries>{reps}</InputSeries>
              </RepsContainer>
              <WeightContainer>
                Peso: <InputSeries>{series.weight[index]}</InputSeries>
              </WeightContainer>
            </SeriesContainer>
            <Button onClick={() => removeSeries(exerciseName ?? "", index)}>
              aaaa
            </Button>
          </>
        ))}
      </Border>

      <Button onClick={() => setIsModalOpen(true)}>adicionar série</Button>
    </Container>
  );
};

export default Series;

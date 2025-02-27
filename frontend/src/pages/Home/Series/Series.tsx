import {
  Container,
  InputSeries,
  RepsContainer,
  SeriesContainer,
  WeightContainer,
} from "./style";
import Border from "../../../components/Border";
import Button from "../../../components/Button";
import useAddSeries from "../../../context/AddSeries/useAddSeries";
import UseSavedInputValue from "../../../context/SavedInputValue/UseSavedInputValue";
import { useState } from "react";
import Modal from "./Modal";

const Series = () => {
  const [isModoalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('')
  const { series, removeSeries, addSeries } = useAddSeries();
  const { addValue, removeValue } = UseSavedInputValue();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    addValue(e.target.value)
  }

  return (
    <Container>
      <Modal 
        isOpen={isModoalOpen}
        onClose={() => setIsModalOpen(false)}
        text="Digite o número de repetições:"
      />

      <h2>Séries de crucifixo</h2>

      <Border>
        {series.map((_, index) => (
          <SeriesContainer key={index}>
            <RepsContainer>
              <p>Repetições:</p>
              <InputSeries value={inputValue} onChange={handleChange} />
            </RepsContainer>
            <WeightContainer>
              <p>Peso:</p>
              <InputSeries />
            </WeightContainer>
            <Button
              onClick={() => {
                removeSeries(index);
                removeValue(index);
              }}
            >
              remover
            </Button>
          </SeriesContainer>
        ))}
      </Border>

      <Button onClick={() => addSeries("Nova série")}>adicionar série</Button>
    </Container>
  );
};

export default Series;

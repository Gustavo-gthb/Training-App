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

const Series = () => {
  const {series, removeSeries, addSeries} = useAddSeries()

  return (
    <Container>
      <h2>Séries de crucifixo</h2>

      <Border>
        {series.map((_, index) => (
          <SeriesContainer key={index}>
            <RepsContainer>
              <p>Repetições:</p>
              <InputSeries />
            </RepsContainer>
            <WeightContainer>
              <p>Peso:</p>
              <InputSeries />
            </WeightContainer>
            <Button onClick={() => removeSeries(index)}>remover</Button>
          </SeriesContainer>
        ))} 
      </Border>

      <Button onClick={() => addSeries("Nova série")}>adicionar série</Button>
    </Container>
  );
};

export default Series;

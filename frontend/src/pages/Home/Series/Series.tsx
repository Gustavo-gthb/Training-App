import { useEffect, useState } from "react";
import {
  Container,
  InputSeries,
  RepsContainer,
  SeriesContainer,
  WeightContainer,
} from "./style";
import Border from "../../../components/Border";
import Button from "../../../components/Button";

const Series = () => {
  const [series, setSeries] = useState<string[]>(() => {
    const storedSeries = localStorage.getItem("series");

    return storedSeries ? JSON.parse(storedSeries) : [];
  });

  useEffect(() => {
    localStorage.setItem("series", JSON.stringify(series));
  }, [series]);

  const addSeries = (newSeries: string) => {
    setSeries((prev) => [...prev, newSeries]);
  };

  const removeSeries = (index: number) => {
    setSeries((prev) => prev.filter((_, i) => i !== index));
  };

  console.log(series);

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

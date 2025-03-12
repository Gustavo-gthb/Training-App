import {
  AddSerie,
  Container,
  DeleteButton,
  DeleteContainer,
  InputSeries,
  RepsContainer,
  SeriesContainer,
  WeightContainer,
} from "./style";
import useAddSeries from "../../../context/AddSeries/useAddSeries";
import { useState } from "react";
import Modal from "./Modal";
import { useParams } from "react-router";
import Border from "../../../components/Border";
import { AnimatePresence, motion } from "framer-motion";

const Series = () => {
  const { exerciseName } = useParams();
  const [isModoalOpen, setIsModalOpen] = useState(false);
  const { data, removeSeries } = useAddSeries();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const series = data[exerciseName ?? ""] || { reps: [], weight: [] };

  const handleSelected = (index: number) => {
    setSelectedIndex((prev) => (prev === index ? null : index));
  };

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
        <AnimatePresence mode="popLayout">
          {series.reps.map((reps, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
            >
              <SeriesContainer key={index}>
                <DeleteContainer
                  isSelected={selectedIndex === index}
                  onClick={() => handleSelected(index)}
                >
                  <RepsContainer>
                    Repetições: <InputSeries>{reps}</InputSeries>
                  </RepsContainer>
                  <WeightContainer>
                    Peso: <InputSeries>{series.weight[index]}</InputSeries>
                  </WeightContainer>
                </DeleteContainer>
              </SeriesContainer>
            </motion.div>
          ))}
        </AnimatePresence>
      </Border>

      <DeleteButton
        isSelected={selectedIndex !== null}
        onClick={() => removeSeries(exerciseName ?? "", selectedIndex!)}
      >
        Delete série
      </DeleteButton>

      <AddSerie onClick={() => setIsModalOpen(true)}>adicionar série</AddSerie>
    </Container>
  );
};

export default Series;

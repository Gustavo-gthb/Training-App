import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import RouterController from "./routes";
import { CreateTrainingProvider } from "./context/CreateTraining/CreateTraining";
import { CreateExerciseProvider } from "./context/CreateExercise/CreateExercise";
import { AddTrainingProvider } from "./context/AddTraining/AddTraining";
import { AddSeriesProvider } from "./context/AddSeries/AddSeries";
import { CreateSeriesProvider } from "./context/CreateSeries/CreateSerie";
import { AddExerciseProvider } from "./context/AddExercise/AddExercise";
import { SavedInputValueProvider } from "./context/SavedInputValue/SavedInputValue";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CreateTrainingProvider>
      <CreateExerciseProvider>
        <CreateSeriesProvider>
          <AddTrainingProvider>
            <AddExerciseProvider>
              <AddSeriesProvider>
                <SavedInputValueProvider>
                  <BrowserRouter>
                    <RouterController />
                  </BrowserRouter>
                </SavedInputValueProvider>
              </AddSeriesProvider>
            </AddExerciseProvider>
          </AddTrainingProvider>
        </CreateSeriesProvider>
      </CreateExerciseProvider>
    </CreateTrainingProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import RouterController from "./routes";
import { CreateTrainingProvider } from "./context/CreateTraining/CreateTraining";
import { CreateExerciseProvider } from "./context/CreateExercise/CreateExercise";
import { AddTrainingProvider } from "./context/AddTraining/AddTraining";
import { AddSeriesProvider } from "./context/AddSeries/AddSeries";
import { SavedInputValueProvider } from "./context/SavedInputValue/SavedInputValue";
import { CreateSeriesProvider } from "./context/CreateSeries/CreateSerie";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CreateTrainingProvider>
      <CreateExerciseProvider>
        <CreateSeriesProvider>
          <AddTrainingProvider>
            <AddSeriesProvider>
              <SavedInputValueProvider>
                <BrowserRouter>
                  <RouterController />
                </BrowserRouter>
              </SavedInputValueProvider>
            </AddSeriesProvider>
          </AddTrainingProvider>
        </CreateSeriesProvider>
      </CreateExerciseProvider>
    </CreateTrainingProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import RouterController from "./routes";
import { CreateTrainingProvider } from "./context/CreateTraining/CreateTraining";
import { CreateExerciseProvider } from "./context/CreateExercise/CreateExercise";
import { AddTrainingProvider } from "./context/AddTraining/AddTraining";
import { AddSeriesProvider } from "./context/AddSeries/AddSeries";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CreateTrainingProvider>
      <CreateExerciseProvider>
        <AddTrainingProvider>
          <AddSeriesProvider>
            <BrowserRouter>
              <RouterController />
            </BrowserRouter>
          </AddSeriesProvider>
        </AddTrainingProvider>
      </CreateExerciseProvider>
    </CreateTrainingProvider>
  </StrictMode>
);

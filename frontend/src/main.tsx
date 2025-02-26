import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import RouterController from "./routes";
import { CreateTrainingProvider } from "./context/CreateTraining/CreateTraining";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CreateTrainingProvider>
      <BrowserRouter>
        <RouterController />
      </BrowserRouter>
    </CreateTrainingProvider>
  </StrictMode>
);

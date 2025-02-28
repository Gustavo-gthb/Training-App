import { Route, Routes } from "react-router";
import Exercise from "./pages/Home/Exercise";
import Train from "./pages/Home/Train/Train";
import Series from "./pages/Home/Series";

const RouterController = () => {
  return (
    <Routes>
      <Route path="/" element={<Train />} />
      <Route path="/exercise/:trainingName" element={<Exercise />} />
      <Route path="/series/:exerciseName" element={<Series />} />
    </Routes>
  );
};

export default RouterController;

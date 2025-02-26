import { Route, Routes } from "react-router";
import Exercise from "./pages/Home/Exercise";
import Train from "./pages/Home/Train/Train";

const RouterController = () => {
  return (
    <Routes>
     

      <Route path="/" element={<Train />} />
      <Route path="/exercise" element={<Exercise />} />
      {/* <Route path="/Series" element={<Series />} /> */}
    </Routes>
  );
};

export default RouterController;

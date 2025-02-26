import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Exercise from "./pages/Home/Exercise";

const RouterController = () => {
  return (
    <Routes>
     

      <Route path="/" element={<Home />} />
      <Route path="/exercise" element={<Exercise />} />
      {/* <Route path="/Series" element={<Series />} /> */}
    </Routes>
  );
};

export default RouterController;

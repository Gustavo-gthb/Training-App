import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";

const RouterController = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/Exercise" element={<Exercise />} />
      <Route path="/Series" element={<Series />} /> */}
    </Routes>
  );
};

export default RouterController;    

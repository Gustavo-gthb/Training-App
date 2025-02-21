import React from "react";

const RouterController = () => {
  return (
    <Routes>
      <Route path="/" element={<Train />} />
      <Route path="/Exercise" element={<Exercise />} />
      <Route path="/Series" element={<Series />} />
    </Routes>
  );
};

export default RouterController;    

import { Route, Routes, useLocation } from "react-router";
import Exercise from "./pages/Home/Exercise";
import Train from "./pages/Home/Train/Train";
import Series from "./pages/Home/Series";
import { AnimatePresence, motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const RouterController = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Train />
            </motion.div>
          }
        />
        <Route
          path="/exercise/:trainingName"
          element={
            <motion.div {...pageTransition}>
              <Exercise />
            </motion.div>
          }
        />
        <Route
          path="/series/:exerciseName"
          element={
            <motion.div {...pageTransition}>
              <Series />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default RouterController;

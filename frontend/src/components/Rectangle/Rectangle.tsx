import { Container, DeleteButton } from "./style";
import { motion } from "framer-motion";

type RectangleProps = {
  children: React.ReactNode;
  handleClickNext?: () => void;
  handleClickDelet: () => void;
};

const rectangleVariants = {
  initial: { opacity: 1, scale: 1 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.5 } },
};

const Rectangle: React.FC<RectangleProps> = ({
  children,
  handleClickNext,
  handleClickDelet,
}) => {
  return (
    <motion.div
      layout
      initial="initial"
      animate="animate"
      exit="exit"
      variants={rectangleVariants}
    >
      <Container>
        <p onClick={handleClickNext}>{children}</p>
        <DeleteButton onClick={handleClickDelet}>X</DeleteButton>
      </Container>
    </motion.div>
  );
};

export default Rectangle;

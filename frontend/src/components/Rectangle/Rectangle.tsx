import { Container, DeleteButton } from "./style";

type RectangleProps = {
  children: React.ReactNode;
  handleClickNext: () => void;
  handleClickDelet: () => void;
};

const Rectangle: React.FC<RectangleProps> = ({
  children,
  handleClickNext,
  handleClickDelet,
}) => {
  return (
    <Container>
        <p onClick={handleClickNext}>{children}</p>
        <DeleteButton onClick={handleClickDelet}>X</DeleteButton>
    </Container>
  );
};

export default Rectangle;

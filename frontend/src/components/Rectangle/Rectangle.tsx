import { Container, DeleteButton } from "./style";

type RectangleProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Rectangle: React.FC<RectangleProps> = ({ children, onClick }) => {
  return (
    <Container>
      <p onClick={onClick}>{children}</p>
      <DeleteButton onClick={onClick}>X</DeleteButton>
    </Container>
  );
};

export default Rectangle;

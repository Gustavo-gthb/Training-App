import { Container } from "./style";

type RectangleProps = {
  children: string;
  onClick?: () => void;
};

const Rectangle: React.FC<RectangleProps> = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children} </Container>;
};

export default Rectangle;

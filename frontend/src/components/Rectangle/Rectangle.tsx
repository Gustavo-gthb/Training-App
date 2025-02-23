import { Container } from "./style";

type RectangleProps = {
  children: string;
};

const Rectangle: React.FC<RectangleProps> = ({ children }) => {
  return <Container>{children} </Container>;
};

export default Rectangle;

import React from "react";
import { Container } from "./style";

type BorderProps = {
  children: React.ReactNode;
};

const Border: React.FC<BorderProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
 
export default Border;  

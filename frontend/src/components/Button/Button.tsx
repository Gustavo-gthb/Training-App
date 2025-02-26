import React from "react";
import { ContainerButton } from "./style";


type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void; 
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <ContainerButton onClick={onClick}>{children}</ContainerButton>;
};

export default Button; 

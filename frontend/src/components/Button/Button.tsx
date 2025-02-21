import React from "react";
import { ContainerButton } from "./style";


type ButtonProps = {
  children: string;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ContainerButton>{children}</ContainerButton>;
};

export default Button;

import React from "react";
import { InputContainer } from "./style";

type InputProps = {
  type?: string;
  value: number | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({type, value, onChange, placeholder }) => {
  return <InputContainer type={type} value={value} onChange={onChange} placeholder={placeholder} ></InputContainer>;
};

export default Input;

import React from "react";
import { InputContainer } from "./style";

type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return <InputContainer value={value} onChange={onChange} placeholder={placeholder} ></InputContainer>;
};

export default Input;

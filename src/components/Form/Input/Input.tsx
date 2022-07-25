import React from "react";
import { InputProps } from "./Input.interface";

type Props = {
  name?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  value?: string;
  className?: string;
};
const Input = React.forwardRef<HTMLInputElement, InputProps>((fields, ref) => {
  const {
    name,
    placeholder,
    label,
    value = "",
    errorMessage,
    className,
  } = fields;
  return (
    <div>
      <label htmlFor={name}>{label} : </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        className={className}
        data-testid={name}
      />
      <div className="invalid-feedback">{errorMessage}</div>
    </div>
  );
});

export  {Input};
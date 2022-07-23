import React from "react";

type Props = {
    name?: string;
    type?: string;
    placeholder?: string;
    label?: string;
    error?: boolean;
    errorMessage?: string;
    value?:string;
    className? :string
};
function Input({  name, placeholder,label, value = "", errorMessage, className }: Props) {
  return (
    <div>
    <label
    htmlFor={name}
  >{label} : </label>
    <input
    type="text"
      name={name}
      placeholder={placeholder}
      defaultValue={value}
      className={className}
    />
   <div className="invalid-feedback">{errorMessage}</div>
    </div>
    
  );
}

export  {Input};
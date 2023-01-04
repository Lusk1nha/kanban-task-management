import { HTMLProps } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface ITextFieldProps extends HTMLProps<HTMLInputElement>  {
  name: string;
  label?: string;
  disableLabel?: boolean;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
}
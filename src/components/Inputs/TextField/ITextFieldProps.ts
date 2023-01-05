import { HTMLProps } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface ITextFieldProps extends HTMLProps<HTMLInputElement>  {
  name: any;
  label?: string;
  disableLabel?: boolean;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
}
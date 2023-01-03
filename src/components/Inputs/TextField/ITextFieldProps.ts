import { HTMLProps } from "react";

export interface ITextFieldProps extends HTMLProps<HTMLInputElement>  {
  label: string;
  type: 'singleline' | 'multiline'
}
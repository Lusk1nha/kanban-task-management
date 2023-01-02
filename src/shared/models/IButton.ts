import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  handleClick?: (arg?: any) => any;
  variant?: 'normal' | 'delete';
}
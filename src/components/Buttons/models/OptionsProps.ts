import { ButtonHTMLAttributes } from "react";
import { IButton } from './../../../shared/models/IButton';

export interface OptionsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttons: IButton[];
  align?: 'left' | 'center' | 'right'
}
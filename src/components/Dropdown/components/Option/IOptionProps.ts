import { IOption } from "../../../../shared/models/IOption";

export interface IOptionProps {
  text: string;
  value: string;
  onChange: (args: any) => void;
}
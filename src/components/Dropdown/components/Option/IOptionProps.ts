import { IOption } from "../../../../shared/models/IOption";

export interface IOptionProps {
  text: string;
  value: string;
  setSelected: React.Dispatch<React.SetStateAction<IOption>>;
}
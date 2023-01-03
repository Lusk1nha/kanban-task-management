import { IOption } from '../../shared/models/IOption';

export interface IDropdownProps {
  defaultValue?: IOption;
  options: IOption[];
  onSelect: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}
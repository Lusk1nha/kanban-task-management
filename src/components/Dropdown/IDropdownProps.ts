import { IOption } from '../../shared/models/IOption';

export interface IDropdownProps {
  selectedOption: IOption | null;
  options: IOption[];
  placeholder?: string;
  onChange: (args: any) => void
  onOpen?: (args: any) => void
  on?: boolean;
}
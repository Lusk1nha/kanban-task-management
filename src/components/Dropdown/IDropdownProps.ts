export interface IDropdownProps {
  name: any;
  label?: string;
  disableLabel?: boolean;
  options: string[];
  placeholder?: string;
  onOpen?: (args: any) => void
  on?: boolean;
}
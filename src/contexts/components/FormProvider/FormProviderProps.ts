import { FormContextProps } from './FormContextProps';
import { FieldValues } from 'react-hook-form';

export interface FormProviderProps<T extends FieldValues> {
  children: React.ReactNode;
  value: FormContextProps<T>;
}
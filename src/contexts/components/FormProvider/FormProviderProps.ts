import { FormContextProps } from './FormContextProps';
import { ITaskCreateModel } from './../../../shared/repositories/ITaskCreateModel';

export interface FormProviderProps {
  children: React.ReactNode;
  value: FormContextProps<ITaskCreateModel>;
}
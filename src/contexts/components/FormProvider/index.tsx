import { createContext } from 'react';
import { FormContextProps } from './FormContextProps';
import { ITaskCreateModel } from './../../../shared/repositories/ITaskCreateModel';
import { FormProviderProps } from './FormProviderProps';

export const FormContext = createContext({} as FormContextProps<ITaskCreateModel>)

export function FormProvider({ children, value }: FormProviderProps) {
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}
import { createContext } from 'react';
import { FormContextProps } from './FormContextProps';
import { FormProviderProps } from './FormProviderProps';
import { FieldValues } from 'react-hook-form';

export const FormContext = createContext({} as FormContextProps<any>)

export function FormProvider<T extends FieldValues>
  ({ children, value }: FormProviderProps<T>) {
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}
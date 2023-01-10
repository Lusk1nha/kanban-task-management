import { createContext } from 'react';
import { FormContentContextProps } from './FormContentContextProps';
import { FormProviderProps } from './FormProviderProps';

export const FormContentContext = createContext({} as FormContentContextProps)

export function FormContentProvider
  ({ children, value }: FormProviderProps) {
  return (
    <FormContentContext.Provider value={value}>
      {children}
    </FormContentContext.Provider>
  )
}
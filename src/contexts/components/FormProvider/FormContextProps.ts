import { FieldArrayWithId, FieldValues, UseFormHandleSubmit, UseFormRegister, UseFormWatch, FieldErrorsImpl, UseFieldArrayAppend, ArrayPath, UseFieldArrayRemove } from "react-hook-form";
import { UseFormSetValue } from "react-hook-form/dist/types/form";

export interface FormContextProps<T extends FieldValues> {
  onSubmit: (data: T) => void; 
  handleSubmit: UseFormHandleSubmit<T>;
  fields: FieldArrayWithId<T, any, "id">[];
  append: UseFieldArrayAppend<T, any>;
  remove: UseFieldArrayRemove;
  register: UseFormRegister<T>;
  watch: UseFormWatch<T>;
  setValue: UseFormSetValue<T>;
  errors: FieldErrorsImpl<T>
}
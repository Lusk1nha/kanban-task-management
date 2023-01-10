import { Control, FieldArrayWithId, FieldValues, UseFormHandleSubmit, UseFormRegister, UseFormWatch, FieldErrorsImpl, UseFieldArrayAppend, ArrayPath, UseFieldArrayRemove } from "react-hook-form";
import { UseFormSetValue } from "react-hook-form/dist/types/form";

import { IButton, IContent } from "../../../components/Form/model/props";

export interface FormContextProps<TFieldValues extends FieldValues = FieldValues> {
  title: string;
  content: IContent;
  submitButton?: IButton;
  onSubmit: (data: TFieldValues) => void;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
  control: Control<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  watch: UseFormWatch<TFieldValues>;
  setValue: UseFormSetValue<TFieldValues>;
  errors: FieldErrorsImpl<TFieldValues>
}
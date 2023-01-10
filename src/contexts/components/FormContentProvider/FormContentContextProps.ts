import { FieldValues, FieldErrorsImpl, DefaultValues, ValidationMode } from "react-hook-form";

import { IButton, IContent } from "../../../components/Form/model/props";

import * as Yup from "yup";

export interface FormContentContextProps {
  name: string;
  mode: keyof ValidationMode | undefined,
  content: IContent;
  validationSchema: Yup.ObjectSchema<any>;
  defaultValues?: DefaultValues<FieldValues>;
  submitButton?: IButton;
}
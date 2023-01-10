import { Logic } from "./components/Logic";
import { FieldValues, DefaultValues, ValidationMode } from 'react-hook-form';
import { MFieldArrayPath, IFieldValue } from "./model/forms";
import { View } from "./components/View";

import * as Yup from "yup";

import { IButton, IContent } from "./model/props";

interface Props<T, K> {
  name: string;
  mode: keyof ValidationMode | undefined,
  content: IContent;
  validationSchema: Yup.ObjectSchema<any>;
  defaultValues?: DefaultValues<T>;
  submitButton?: IButton;
}

export function Form<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends MFieldArrayPath<TFieldValues, IFieldValue> = MFieldArrayPath<TFieldValues, IFieldValue>>
  ({ name, mode, content, submitButton, validationSchema, defaultValues }: Props<TFieldValues, TFieldArrayName>) {

  async function handleSubmit(data: TFieldValues): Promise<Response | void> {
    try {

      return
    } catch (err) {
      if (err instanceof Error)
        throw new Error(err.message)
    }
  }

  return (
    <Logic title={name} content={content} submitButton={submitButton} mode={mode} validationSchema={validationSchema} defaultValues={defaultValues} onSubmit={handleSubmit}>
      <View />
    </Logic>
  )
}
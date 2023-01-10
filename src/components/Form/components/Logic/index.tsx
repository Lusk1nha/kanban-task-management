import { useForm, FieldValues, DefaultValues, ValidationMode } from 'react-hook-form';

import * as Yup from "yup";

import { MFieldArrayPath } from '../../model/forms';
import { FormProvider } from '../../../../contexts/components/FormProvider';

import { IButton, IContent } from '../../model/props';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props<T> {
  title: string;
  content: IContent;
  mode: keyof ValidationMode | undefined;
  children: React.ReactNode;
  validationSchema: Yup.ObjectSchema<any>;
  defaultValues?: DefaultValues<T>;
  onSubmit: (data: T) => Promise<Response | void>;
  submitButton?: IButton;
}

interface IFieldValue {
  Title: string;
}

export function Logic<TFieldValues extends FieldValues = FieldValues, TFieldArrayName extends MFieldArrayPath<TFieldValues, IFieldValue> = MFieldArrayPath<TFieldValues, IFieldValue>>({ title, content, submitButton, mode, children, validationSchema, defaultValues, onSubmit }: Props<TFieldValues>) {

  let fieldArrayProps = undefined

  const { formState, register, handleSubmit, control, reset, watch, setValue } = useForm<TFieldValues>({
    mode,
    defaultValues,
    criteriaMode: "all",
    resolver: yupResolver(validationSchema)
  });

  const { errors, isSubmitting } = formState

  async function handleSubmitLogic(data: TFieldValues): Promise<void> {
    console.log(data)

    await onSubmit(data)
      .then(() => reset(data))
      .catch((err: Error) => {
        throw new Error(err.message)
      })
  }


  return (
    <FormProvider value={{ title, content, submitButton, onSubmit: handleSubmitLogic, control, handleSubmit, register, watch, setValue, errors }}>
      {children}
    </FormProvider>
  )
}
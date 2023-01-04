import { FormProvider } from '../../../../contexts/components/FormProvider';
import { ITaskCreateModel } from '../../../../shared/repositories/ITaskCreateModel';

import { IFormLogic } from './../../../../shared/models/IFormLogic';
import { useForm, useFieldArray } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as Yup from "yup";

export const TaskCreateSchema = Yup.object().shape({
  Title: Yup
    .string()
    .nullable()
    .required('Can’t be empty'),

  Description: Yup
    .string()
    .nullable(),

  Subtasks: Yup.array()
    .of(
      Yup.object().shape({
        Title: Yup.string()
          .required('Can’t be empty')
          .nullable()
      })
    ),

  Status: Yup.string()
    .required()
    .nullable()
})

export function Logic({ children, defaultValues, onSubmit }: IFormLogic<ITaskCreateModel>) {
  const { formState, register, handleSubmit, control, reset, watch } = useForm<ITaskCreateModel>({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(TaskCreateSchema)
  })

  const { errors, isSubmitting } = formState

  const { fields, append, remove } = useFieldArray<any>({
    control,
    name: "Subtasks",
    rules: {
      required: false
    }
  })

  async function handleSubmitLogic(data: ITaskCreateModel): Promise<void> {
    console.log(data)

    await onSubmit(data)
      .then(() => reset(data))
      .catch((err: Error) => console.error(err))
  }

  return (
    <FormProvider value={{ onSubmit: handleSubmitLogic, fields, append, remove, handleSubmit, register, watch, errors }}>
      {children}
    </FormProvider>
  )
}
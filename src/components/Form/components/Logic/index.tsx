import { useForm, FieldValues, DefaultValues, ValidationMode, FormProvider } from 'react-hook-form';

import * as Yup from "yup";

import { MFieldArrayPath } from '../../model/forms';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useContext } from 'react';
import { View } from '../View';
import { FormContentContext } from './../../../../contexts/components/FormContentProvider/index';

interface Props {
  children?: React.ReactNode;
  onSubmit: (data: FieldValues) => Promise<Response | void>;
}


export function Logic({ onSubmit }: Props) {
  const {
    mode,
    defaultValues,
    validationSchema } = useContext(FormContentContext)

  const methods = useForm<FieldValues>({
    mode,
    defaultValues,
    criteriaMode: "all",
    resolver: yupResolver(validationSchema)
  });

  const { formState, formState: { isValidating }, handleSubmit, reset, watch } = methods

  const data = watch()

  async function handleSubmitLogic(data: FieldValues): Promise<void> {
    console.log(data)

    await onSubmit(data)
      .catch((err: Error) => {
        throw new Error(err.message)
      })
  }

  // useEffect(() => {
  //   if ((mode === "all" || mode === "onChange")
  //     && formState.isValid
  //     && formState.isSubmitting
  //     && !isValidating) {
  //       console.log(formState)
  //     handleSubmit(async (data) => console.log(data))()
  //   }

  // }, [formState, data, isValidating])


  // useEffect(() => {
  //   if (formState.isSubmitSuccessful) {
  //     reset()
  //   }

  // }, [formState.isSubmitSuccessful])

  return (
    <FormProvider {...methods}>
      <View onSubmit={handleSubmitLogic} />
    </FormProvider>
  )
}
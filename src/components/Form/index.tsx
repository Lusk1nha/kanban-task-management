import { Logic } from "./components/Logic";
import { FieldValues, DefaultValues, ValidationMode } from 'react-hook-form';

import * as Yup from "yup";

import { IButton, IContent } from "./model/props";
import { FormContentProvider } from "../../contexts/components/FormContentProvider";
import { Loading } from "../Loading";
import { useQuery } from "react-query";
import { MFieldArrayPath, IFieldValue } from "./model/forms";

interface Props<T, K> {
  name: string;
  mode: keyof ValidationMode | undefined,
  content: IContent;
  validationSchema: Yup.ObjectSchema<any>;
  defaultValues?: DefaultValues<T>;
  submitButton?: IButton;
}

export function Form<TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends MFieldArrayPath<TFieldValues, IFieldValue> = MFieldArrayPath<TFieldValues, IFieldValue>>
  ({ name, mode, content, submitButton, validationSchema, defaultValues }: Props<TFieldValues, TFieldArrayName>) {

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query')
        .then(
          (res) => res.json(),
        )
        .catch(err => {
          throw new Error(err.message)
        }),
  })

  async function handleSubmit(data: FieldValues): Promise<Response | void> {
    try {
      return
    } catch (err) {
      if (err instanceof Error)
        throw new Error(err.message)
    }
  }

  return (
    <FormContentProvider value={{ name, mode, content, submitButton, validationSchema, defaultValues }}>
      {
        !error
          ?
          isLoading
            ? <Loading />
            : <Logic onSubmit={handleSubmit} />

          : <>Error Ocurred</>
      }
    </FormContentProvider>
  )
}
import { Form, Footer, SubmitButton } from "../../style";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { FieldValues, useFormContext } from "react-hook-form";
import { FormContentContext } from './../../../../contexts/components/FormContentProvider/index';
import { useContext } from "react";

interface IViewProps {
  onSubmit: (data: FieldValues) => void;
}

export function View({ onSubmit }: IViewProps) {
  const {
    handleSubmit
  } = useFormContext()

  const {
    content,
    submitButton
  } = useContext(FormContentContext)

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Header {...content.header} />

      <Main {...content.main} />

      <Footer>
        {
          submitButton
            ? <SubmitButton type="submit" {...submitButton} />
            : null
        }
      </Footer>
    </Form>
  )
}
import { Form, Footer, SubmitButton } from "../../style";

import { useContext } from 'react';
import { FormContext } from './../../../../contexts/components/FormProvider/index';
import { CurrentBoardContext } from "../../../../contexts/components/CurrentBoardContextProvider";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

export function View() {
  const {
    content,
    submitButton,
    onSubmit,
    handleSubmit
  } = useContext(FormContext)

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
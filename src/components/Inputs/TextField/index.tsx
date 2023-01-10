import { Container, Wrapper, Input, Label } from "./style";
import { ITextFieldProps } from './ITextFieldProps';
import { useState, useContext } from 'react';
import { FormContext } from './../../../contexts/components/FormProvider/index';
import { ErrorMessage } from "@hookform/error-message";
import { ErrorMessageText } from "../../ErrorMessageText";

export function TextField({ name, label, disableLabel, rows, placeholder, register, rules, disabled }: ITextFieldProps) {
  const [hasError, setHasError] = useState<boolean>(false)
  const { errors, watch } = useContext(FormContext)

  const value = watch(name)

  return (
    <Container hasError={hasError}>
      {!disableLabel ? <Label>{label}</Label> : null}

      <Wrapper>
        <Input rows={rows} placeholder={placeholder} {...register(name, rules)} />
        <ErrorMessage
          as="div"
          errors={errors}
          name={name}
          render={({ message }) => {
            return <ErrorMessageText message={message} setHasError={setHasError} />
          }}
        />
      </Wrapper>
    </Container>
  )
}
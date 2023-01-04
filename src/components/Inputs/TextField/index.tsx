import { Container, Wrapper, Input, Label, ErrorMessage } from "./style";
import { ITextFieldProps } from './ITextFieldProps';
import { useState, useContext, useEffect } from 'react';
import { FormContext } from './../../../contexts/components/FormProvider/index';

export function TextField({ name, label, disableLabel, rows, placeholder, register, rules }: ITextFieldProps) {
  const [hasError, setHasError] = useState<boolean>(false)
  const { errors }: any = useContext(FormContext)

  useEffect(() => {
    const containsError = errors[name] != null
    setHasError(containsError)
  })

  console.log(name, errors, errors[name])

  return (
    <Container hasError={hasError}>
      {!disableLabel ? <Label>{label}</Label> : null}

      <Wrapper>
        <Input rows={rows} placeholder={placeholder} {...register(name, rules)} />
        <ErrorMessage>
          {errors[name]?.message}
        </ErrorMessage>
      </Wrapper>
    </Container>
  )
}
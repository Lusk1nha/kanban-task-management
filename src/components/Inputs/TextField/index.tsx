import { Container, Wrapper, InputArea, Label, InputText } from "./style";
import { ITextFieldProps } from './ITextFieldProps';
import { useState } from 'react';

import { ErrorMessage } from "@hookform/error-message";
import { ErrorMessageText } from "../../ErrorMessageText";
import { useFormContext } from "react-hook-form";

export function TextField({ name, label, disableLabel, rows, placeholder, register, rules, disabled }: ITextFieldProps) {
  const [hasError, setHasError] = useState<boolean>(false)
  const { formState: { errors }, watch } = useFormContext()

  const value = watch(name)

  return (
    <Container hasError={hasError}>
      {!disableLabel ? <Label>{label}</Label> : null}

      <Wrapper>
        {
          rows && rows > 1
            ? <InputArea rows={rows} placeholder={placeholder} {...register(name, rules)} />
            : <InputText placeholder={placeholder} {...register(name, rules)} />
        }

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
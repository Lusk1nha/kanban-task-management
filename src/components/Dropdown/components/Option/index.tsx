import { Container } from "./style";
import { IOptionProps } from './IOptionProps';

import { useFormContext } from "react-hook-form";

export function Option({ name, text }: IOptionProps) {
  const { setValue } = useFormContext()

  return (
    <Container title={text} aria-label={text} onClick={() => setValue(name, text)}>
      {text}
    </Container >
  )
}
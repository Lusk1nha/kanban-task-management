import { Container } from "./style";
import { IOptionProps } from './IOptionProps';
import { FormContext } from "../../../../contexts/components/FormProvider";
import { useContext } from "react";

export function Option({ name, text }: IOptionProps) {
  const { setValue } = useContext(FormContext)

  return (
    <Container onClick={() => setValue(name, text)}>
      {text}
    </Container >
  )
}
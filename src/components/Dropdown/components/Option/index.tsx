import { Container } from "./style";
import { IOptionProps } from './IOptionProps';

export function Option({ text, value }: IOptionProps) {
  return (
    <Container>
      {text}
    </Container>
  )
}
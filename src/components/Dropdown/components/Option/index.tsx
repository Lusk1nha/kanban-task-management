import { Container } from "./style";
import { IOptionProps } from './IOptionProps';

export function Option({ text, value, onChange }: IOptionProps) {
  return (
    <Container onClick={() => onChange({ text, value })}>
      {text}
    </Container >
  )
}
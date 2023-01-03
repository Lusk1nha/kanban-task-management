import { Container } from "./style";
import { IOptionProps } from './IOptionProps';
import { IOption } from "../../../../shared/models/IOption";

export function Option({ text, value, setSelected }: IOptionProps) {
  const handleClick = (option: IOption) => setSelected(option);

  return (
    <Container onClick={() => handleClick({text, value})}>
      {text}
    </Container>
  )
}
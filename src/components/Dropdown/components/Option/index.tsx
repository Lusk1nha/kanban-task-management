import { Container } from "./style";
import { IOptionProps } from './IOptionProps';
import { IOption } from "../../../../shared/models/IOption";

export function Option({ text, value, setValue }: IOptionProps) {
  const handleClick = (option: IOption) => setValue(option);

  return (
    <Container onClick={() => handleClick({text, value})}>
      {text}
    </Container>
  )
}
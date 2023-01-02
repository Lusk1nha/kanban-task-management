import { ButtonProps } from "../../models/ButtonProps";
import { OptionsProps } from "../../models/OptionsProps";
import { Button, Container, Dot, OptionButton, OptionsContent } from "./style";
import { useState } from 'react';

export function Options({ buttons, align, ...rest }: OptionsProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <Container>
      <Button onClick={handleClick} {...rest}>
        <Dot />
        <Dot />
        <Dot />
      </Button>

      {isOpen
        ? (
          <OptionsContent align={align ?? 'center'}>
            {buttons?.map(({ text, ...rest }, id) => {
              return <OptionButton key={id} {...rest}>{text}</OptionButton>
            })}
          </OptionsContent>
        )
        : null}
    </Container>
  )
}
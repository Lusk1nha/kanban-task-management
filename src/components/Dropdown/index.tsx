import { Container, Wrapper, Output, CurrentValue } from "./style";
import { useState } from 'react';
import { OptionsRender } from './components/OptionsRender/index';
import { IDropdownProps } from "./IDropdownProps";

export function Dropdown({ defaultValue, options }: IDropdownProps) {
  const [value, setValue] = useState<string | null>(defaultValue)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = () => setIsOpen(!isOpen)

  return (
    <Container>
      <Wrapper>
        <Output onClick={handleOpen}>
          <CurrentValue>Doing</CurrentValue>
        </Output>

        {
          isOpen
            ? <OptionsRender options={options} />
            : null
        }
      </Wrapper>
    </Container>
  )
}
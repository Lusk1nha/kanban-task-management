import { Container, Wrapper, Output, CurrentValue } from "./style";
import { useState, useEffect } from 'react';
import { OptionsRender } from './components/OptionsRender/index';
import { IDropdownProps } from "./IDropdownProps";
import { ChevronDown } from './../Icons/components/ChevronDown/index';
import { IOption } from "../../shared/models/IOption";

export function Dropdown({ on, onChange, onOpen, selectedOption, options, placeholder }: IDropdownProps) {
  const [selected, setSelected] = useState<IOption | null>(selectedOption)

  useEffect(() => {
    if (selected?.value != selectedOption?.value) {
      console.log('here')
      setSelected(selectedOption)
    }
  }, [selectedOption])

  return (
    <Container>
      <Wrapper>
        <Output onClick={onOpen}>
          <CurrentValue>{selected?.text ?? placeholder}</CurrentValue>
          <ChevronDown iconColor="transparent" />
        </Output>

        {
          on
            ? <OptionsRender options={options} onChange={onChange} />
            : null
        }
      </Wrapper>
    </Container>
  )
}
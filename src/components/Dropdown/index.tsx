import { Container, Wrapper, Output, CurrentValue } from "./style";
import { useState, useEffect } from 'react';
import { OptionsRender } from './components/OptionsRender/index';
import { IDropdownProps } from "./IDropdownProps";
import { ChevronDown } from './../Icons/components/ChevronDown/index';
import { IOption } from "../../shared/models/IOption";

export function Dropdown({ defaultValue, options, placeholder, onSelect }: IDropdownProps) {
  const [selected, setSelected] = useState<IOption>(defaultValue ?? options.filter(option => option.isDefaultValue)[0])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    if(selected != null) {
      onSelect(selected.value)
    }
  }, [selected, options])

  const handleOpen = () => setIsOpen(!isOpen)

  return (
    <Container>
      <Wrapper>
        <Output onClick={handleOpen}>
          <CurrentValue>{selected?.text ?? placeholder}</CurrentValue>
          <ChevronDown iconColor="transparent" />
        </Output>

        {
          isOpen
            ? <OptionsRender options={options} setSelected={setSelected} />
            : null
        }
      </Wrapper>
    </Container>
  )
}
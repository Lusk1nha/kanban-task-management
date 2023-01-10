import { Container, Label, Wrapper, Output, CurrentValue } from "./style";
import { useState, useEffect } from 'react';
import { OptionsRender } from './components/OptionsRender/index';
import { IDropdownProps } from "./IDropdownProps";
import { ChevronDown } from './../Icons/components/ChevronDown/index';

import { useFormContext } from "react-hook-form";

export function Dropdown({ name, label, disableLabel, on, onOpen, options, placeholder }: IDropdownProps) {
  const { watch } = useFormContext()

  const currentValue = watch(name)

  const [selected, setSelected] = useState<string>(currentValue)

  useEffect(() => {
    if (selected != currentValue) {
      setSelected(currentValue)
    }
  }, [currentValue])

  return (
    <Container>
      {!disableLabel ? <Label>{label}</Label> : null}
      <Wrapper>
        <Output title={`${label}: ${selected}`} aria-label={`${label}: ${selected}`} onClick={onOpen}>
          <CurrentValue>{selected ?? placeholder}</CurrentValue>
          <ChevronDown iconColor="transparent" />
        </Output>

        {
          on
            ? <OptionsRender name={name} options={options} />
            : null
        }
      </Wrapper>
    </Container>
  )
}
import { Container, Label, Wrapper, Output, CurrentValue } from "./style";
import { useState, useEffect } from 'react';
import { OptionsRender } from './components/OptionsRender/index';
import { IDropdownProps } from "./IDropdownProps";
import { ChevronDown } from './../Icons/components/ChevronDown/index';

import { useContext } from 'react';
import { FormContext } from './../../contexts/components/FormProvider/index';

export function Dropdown({ name, label, disableLabel, on, onOpen, options, placeholder }: IDropdownProps) {
  const { watch } = useContext(FormContext)

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
        <Output onClick={onOpen}>
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
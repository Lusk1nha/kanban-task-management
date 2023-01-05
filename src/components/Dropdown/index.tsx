import { Container, Label, Wrapper, Output, CurrentValue } from "./style";
import { useState, useEffect } from 'react';
import { OptionsRender } from './components/OptionsRender/index';
import { IDropdownProps } from "./IDropdownProps";
import { ChevronDown } from './../Icons/components/ChevronDown/index';
import { IOption } from "../../shared/models/IOption";
import { useContext } from 'react';
import { FormContext } from './../../contexts/components/FormProvider/index';

export function Dropdown({ name, label, disableLabel, on, onChange, onOpen, selectedOption, options, placeholder }: IDropdownProps) {
  const { setValue } = useContext(FormContext)
  const [selected, setSelected] = useState<IOption | null>(selectedOption)

  useEffect(() => {
    if (selected?.value != selectedOption?.value) {
      setSelected(selectedOption)
      setValue(name, selectedOption?.value)
    }
  }, [selectedOption])

  return (
    <Container>
      {!disableLabel ? <Label>{label}</Label> : null}
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
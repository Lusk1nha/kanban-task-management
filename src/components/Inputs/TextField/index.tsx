import { Container, Singleline, Multiline, Label } from "./style";
import { ITextFieldProps } from './ITextFieldProps';
import { useState } from 'react';

export function TextField({ name, label, type, rows, placeholder }: ITextFieldProps) {
  const [value, setValue] = useState<string>('')

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>

      {
        type == 'singleline'
          ? <Singleline id={name} name={name} onChange={e => setValue(e.target.value)} value={value} placeholder={placeholder} />
          : <Multiline id={name} name={name} onChange={e => setValue(e.target.value)} value={value} rows={rows} placeholder={placeholder} />
      }
    </Container>
  )
}
import { Container, RemoveItemButton } from "./style";
import { IItemProps } from './IItemProps';
import { useContext } from 'react';
import { FormContext } from './../../../../../contexts/components/FormProvider/index';
import { TextField } from "../../../TextField";
import { CrossIcon } from "../../../../Icons/components/CrossIcon";

export function Item({ name, remove, index }: IItemProps) {
  const { register } = useContext(FormContext)

  const handleRemoveItem = async () => {
    remove(index)
  }

  return (
    <Container>
      <TextField name={`${name}.${index}.Title`} rows={1} placeholder="e.g. Make coffee" register={register} disableLabel />
      
      <RemoveItemButton type="button" title="Click to remove item" aria-label="Click to remove item button" onClick={handleRemoveItem}>
        <CrossIcon />
      </RemoveItemButton>
    </Container>
  )
}
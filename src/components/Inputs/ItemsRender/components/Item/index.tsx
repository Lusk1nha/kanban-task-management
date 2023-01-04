import { Container, RemoveItemButton } from "./style";
import { IItemProps } from './IItemProps';
import { useContext } from 'react';
import { FormContext } from './../../../../../contexts/components/FormProvider/index';
import { TextField } from "../../../TextField";

export function Item({ item, index }: IItemProps) {
  const { register, remove } = useContext(FormContext)

  const handleRemoveItem = async () => {
    remove(index)
  }

  return (
    <Container>
      <TextField name={`Subtasks.${index}.Title`} rows={1} placeholder="e.g. Make coffee" register={register} disableLabel />
      <RemoveItemButton type="button" onClick={handleRemoveItem}>
        X
      </RemoveItemButton>
    </Container>
  )
}
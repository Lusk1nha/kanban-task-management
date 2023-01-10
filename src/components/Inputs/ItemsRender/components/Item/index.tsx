import { Container, RemoveItemButton } from "./style";
import { IItemProps } from './IItemProps';
import { TextField } from "../../../TextField";
import { CrossIcon } from "../../../../Icons/components/CrossIcon";
import { useFormContext } from "react-hook-form";

export function Item({ name, remove, index }: IItemProps) {
  const { register } = useFormContext()

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
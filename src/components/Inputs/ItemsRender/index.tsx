import { Item } from "./components/Item";
import { Container, Label, Wrapper, Render, CreateItemButton } from "./style";
import { Control, FieldValues, useFormContext } from "react-hook-form";

import { useMFieldArray } from "../../../components/Form/model/forms";
import { IButton } from "../../Form/model/props";

interface IItemsRenderProps {
  name: string;
  control: Control<FieldValues>;
  label: string;
  newItemSchema: any;
  addNewItemButton: IButton;
}

export function ItemsRender({ name, label, newItemSchema, addNewItemButton }: IItemsRenderProps) {
  const {
    control
  } = useFormContext()

  const { fields, append, remove } = useMFieldArray({
    name,
    control
  });

  const handleAddNewItemButtonClick = () => append(newItemSchema)

  return (
    <Container>
      <Label>{label}</Label>

      <Wrapper>
        <Render>
          {fields.map((item, id) => {
            return <Item name={name} item={item} index={id} remove={remove} key={item.id} />
          })}
        </Render>

        <CreateItemButton type="button" {...addNewItemButton} onClick={handleAddNewItemButtonClick} />
      </Wrapper>
    </Container>
  )
}
import { IItemsRenderProps } from "./IItemsRenderProps";
import { Item } from "./components/Item";
import { Container, Label, Wrapper, Render, CreateItemButton } from "./style";
import { useContext } from 'react';
import { FormContext } from './../../../contexts/components/FormProvider/index';

export function ItemsRender({ label, newItemSchema }: IItemsRenderProps) {
  const { fields, append } = useContext(FormContext)

  const handleAddNewItemButtonClick = () => append(newItemSchema)

  return (
    <Container>
      <Label>{label}</Label>

      <Wrapper>
        <Render>
          {fields.map((item, id) => {
            return (
              <Item item={item} index={id} key={item.id} />
            )
          })}
        </Render>

        <CreateItemButton type="button" onClick={handleAddNewItemButtonClick}>
          + Add New Subtask
        </CreateItemButton>
      </Wrapper>
    </Container>
  )
}
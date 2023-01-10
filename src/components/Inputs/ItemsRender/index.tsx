import { Item } from "./components/Item";
import { Container, Label, Wrapper, Render, CreateItemButton } from "./style";
import { useContext } from 'react';
import { FormContext } from './../../../contexts/components/FormProvider/index';
import { Control, FieldValues } from "react-hook-form";

import { MFieldArrayPath, IFieldValue, useMFieldArray } from "../../../components/Form/model/forms";
import { IButton } from "../../Form/model/props";

interface IItemsRenderProps<TFieldValues extends FieldValues, TFieldArrayName> {
  name: TFieldArrayName;
  control: Control<TFieldValues>;
  label: string;
  newItemSchema: any;
  addNewItemButton: IButton;
}

export function ItemsRender<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends MFieldArrayPath<TFieldValues, IFieldValue> = MFieldArrayPath<TFieldValues, IFieldValue>
>({ name, label, newItemSchema, addNewItemButton }: IItemsRenderProps<TFieldValues, TFieldArrayName>) {
  const {
    control
  } = useContext(FormContext)

  const { fields, append, remove } = useMFieldArray<IFieldValue, TFieldValues, TFieldArrayName>({
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
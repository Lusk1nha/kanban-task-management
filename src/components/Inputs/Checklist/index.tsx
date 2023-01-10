import { Container, Label, Wrapper } from "./style";
import { Item } from './components/Item';

import { useContext } from "react";
import { FormContext } from "../../../contexts/components/FormProvider";
import { useMFieldArray, MFieldArrayPath } from "../../Form/model/forms";
import { FieldValues } from "react-hook-form";

interface IChecklistValue {
  title: string;
  isCompleted: boolean;
}

interface IChecklistProps<TFieldValues extends FieldValues, TFieldArrayName> {
  name: TFieldArrayName;
}

export function Checklist<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends MFieldArrayPath<TFieldValues, IChecklistValue> = MFieldArrayPath<TFieldValues, IChecklistValue>
>({ name }: IChecklistProps<TFieldValues, TFieldArrayName>) {
  const {
    control
  } = useContext(FormContext)

  const { fields, update } = useMFieldArray<IChecklistValue, TFieldValues, TFieldArrayName>({
    name,
    control
  });

  const itemsLength = fields?.length
  const completedItems = fields.filter(items => items.isCompleted)

  return (
    <Container>
      <Label>{`Subtasks (${completedItems?.length} of ${itemsLength})`}</Label>

      <Wrapper>
        {fields.map((item, id) => {
          return <Item name={name} update={update} item={item} index={id} key={item.id} />
        })}
      </Wrapper>
    </Container>
  )
}
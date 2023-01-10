import { Container, Label, Wrapper } from "./style";
import { Item } from './components/Item';

import { useFieldArray, useFormContext } from "react-hook-form";

type ChecklistValue = {
  title: string;
  isCompleted: boolean;
}

interface IChecklistProps {
  name: string;
}

export function Checklist({ name }: IChecklistProps) {
  const {
    control
  } = useFormContext()

  const { fields, update } = useFieldArray({
    name,
    control
  });

  const itemsLength = fields?.length
  const completedItems = fields?.filter((item: any) => item.isCompleted)

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
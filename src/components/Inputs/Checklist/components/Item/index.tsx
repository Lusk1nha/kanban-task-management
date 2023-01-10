import { Container, Mark, Text } from "./style";
import { UseFieldArrayUpdate } from "react-hook-form";

interface IItemProps {
  name: unknown;
  item: any;
  index: number;
  update: UseFieldArrayUpdate<any>;
}

export function Item({ index, item, update }: IItemProps) {
  const handleClick = () => {
    update(index, {
      title: item.title,
      isCompleted: !item.isCompleted
    })
  }

  return (
    <Container onClick={handleClick} isCompleted={item.isCompleted}>
      <Mark />
      <Text>
        {item.title}
      </Text>
    </Container>
  )
}
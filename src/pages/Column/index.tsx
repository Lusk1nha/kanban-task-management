import { Container, Details, Circle, Name } from "./style";
import { TaskRender } from '../TaskRender/index';

interface ColumnProps {
  index: number;
  name: string;
  tasks: any[];
}

export function Column({ index, name, tasks}: ColumnProps) {

  const currentColorPosition = index % 3

  return (
    <Container>
      <Details>
        <Circle currentPosition={currentColorPosition} />
        <Name>{name.toUpperCase()}</Name>
        <Name>{`(${tasks?.length})`}</Name>
      </Details>

      <TaskRender tasks={tasks} />
    </Container>
  )
}
import { Task } from "../Task";
import { Container } from "./style";

interface TaskRenderProps {
  tasks: any[]
}

export function TaskRender({ tasks }: TaskRenderProps) {

  return (
    <Container>
      {tasks.map((task, id) => {
        return (
          <Task key={id} {...task} />
        )
      })}
    </Container>
  )
}
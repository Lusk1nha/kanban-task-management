import { ITask } from "../../shared/models/ITask";

import { Task } from "../Task";
import { Container } from "./style";

interface TaskRenderProps {
  tasks: ITask[]
}

export function TaskRender({ tasks }: TaskRenderProps) {
  return (
    <Container>
      {tasks.map((task, id) => {
        return <Task key={task.title + task.status + id} {...task} />
      })}
    </Container>
  )
}
import { ISubtask } from './../../shared/models/ISubtask';

import { Subtask } from '../Subtask';

import { Container } from "./style";

interface SubTaskRenderProps {
  subtasks: ISubtask[]
}

export function SubtaskRender({ subtasks }: SubTaskRenderProps) {
  return (
    <Container>
      {subtasks.map((subtask, id) => {
        return <Subtask key={subtask.title + id} {...subtask} />
      })}
    </Container>
  )
}
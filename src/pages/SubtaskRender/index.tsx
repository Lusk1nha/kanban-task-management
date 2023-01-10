import { ISubtask } from './../../shared/models/ISubtask';

import { Subtask } from '../Subtask';

import { Container, Title, Wrapper } from "./style";

interface SubTaskRenderProps {
  subtasks: ISubtask[]
}

export function SubtaskRender({ subtasks }: SubTaskRenderProps) {
  const subtasksLength = subtasks?.length

  const completedSubtasks = subtasks.filter(subtask => subtask.isCompleted)
  const completedSubtasksLength = completedSubtasks?.length

  return (
    <Container>
      <Title>{`Subtasks (${completedSubtasksLength} of ${subtasksLength})`}</Title>
      
      <Wrapper>
        {subtasks.map((subtask, id) => {
          return <Subtask key={subtask.title + id} {...subtask} />
        })}
      </Wrapper>
    </Container>
  )
}
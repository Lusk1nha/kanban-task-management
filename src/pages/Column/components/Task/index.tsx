import { Container, Title, SubtasksInfo } from "./style";

interface TaskProps {
  title: string;
  description: string | null;
  status: string;
  subtasks: any[]
}

export function Task({ title, description, status, subtasks }: TaskProps) {

  return (
    <Container title={title} aria-label={title} draggable>
      <Title>{title}</Title>
      <SubtasksInfo title={`0 of ${subtasks?.length} subtasks`}>
        {`0 of ${subtasks?.length} subtasks`}
      </SubtasksInfo>
    </Container>
  )
}
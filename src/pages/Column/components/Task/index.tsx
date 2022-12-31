import { Container, Title, SubtasksInfo } from "./style";

interface TaskProps {
  title: string;
  description: string | null;
  status: string;
  subtasks: any[]
}

export function Task({ title, description, status, subtasks }: TaskProps) {

  return (
    <Container>
      <Title>{title}</Title>
      <SubtasksInfo>
        {`0 of ${subtasks?.length} subtasks`}
      </SubtasksInfo>
    </Container>
  )
}
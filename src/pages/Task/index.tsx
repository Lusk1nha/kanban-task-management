import { useContext } from "react";
import { ModalContext } from "../../contexts/components/ModalProvider";
import { Container, Title, SubtasksInfo } from "./style";
import { TaskView } from "../../pages/Forms/TaskView";
import { ISubtask } from './../../shared/models/ISubtask';

interface TaskProps {
  title: string;
  description: string | null;
  status: string;
  subtasks: ISubtask[]
}

export function Task({ title, description, status, subtasks }: TaskProps) {
  const modalContext = useContext(ModalContext);

  const handleClick = () => {
    modalContext?.setOpened(true);
    modalContext?.setContent(<TaskView title={title} description={description} status={status} subtasks={subtasks} />);
  }

  return (
    <Container title={title} aria-label={title} onClick={handleClick}>
      <Title>{title}</Title>
      <SubtasksInfo title={`0 of ${subtasks?.length} subtasks`}>
        {`0 of ${subtasks?.length} subtasks`}
      </SubtasksInfo>
    </Container>
  )
}
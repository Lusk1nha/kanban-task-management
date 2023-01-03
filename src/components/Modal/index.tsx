import { IModalProps } from "./IModalProps";
import { Container, Wrapper } from "./style";
import { useContext } from 'react';
import { ModalContext } from './../../contexts/components/ModalProvider/index';
import { TaskCreate } from './../../pages/Task/components/TaskCreate/index';

export function Modal({ children, on }: IModalProps) {
  const modalContext = useContext(ModalContext);
  const handleClickOutside = () => modalContext?.setOpened(false);

  return (
    <Container onClick={handleClickOutside} active={on}>
      <Wrapper>
        <TaskCreate />
      </Wrapper>
    </Container>
  )
}
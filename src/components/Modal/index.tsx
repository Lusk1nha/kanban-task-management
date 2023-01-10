import { IModalProps } from "./IModalProps";
import { Container, Wrapper } from "./style";
import { useContext } from 'react';
import { ModalContext } from './../../contexts/components/ModalProvider/index';

export function Modal({ children, on }: IModalProps) {
  const modalContext = useContext(ModalContext);

  const handleClickOutside = () => {
    modalContext?.setOpened(false)
    modalContext?.setContent(null)
  };

  return (
    <Container onClick={handleClickOutside} active={on}>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )
}
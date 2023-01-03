import { IModalProps } from "./IModalProps";
import { Container, Wrapper, Content } from "./style";
import { MouseEventHandler, useContext, useEffect } from 'react';
import { ModalContext } from './../../contexts/components/ModalProvider/index';

export function Modal({ children, on }: IModalProps) {
  const modalContext = useContext(ModalContext);
  const handleClickOutside = () => modalContext?.setOpened(false);

  const handleClickInContent = (event: any) => {
    event.stopPropagation()
  }

  return (
    <Container onClick={handleClickOutside} active={on}>
      <Wrapper>
        <Content onClick={handleClickInContent}>
          {children}
        </Content>
      </Wrapper>
    </Container>
  )
}
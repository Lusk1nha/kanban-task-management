import { IModalProps } from "./IModalProps";
import { Container, Wrapper } from "./style";

export function Modal({ children }: IModalProps) {

  return (
    <Container>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )
}
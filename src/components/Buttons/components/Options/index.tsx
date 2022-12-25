import { ButtonProps } from "../../models/ButtonProps";
import { Container, Dot } from "./style";

export function Options(props: ButtonProps) {

  return (
    <Container {...props}>
      <Dot />
      <Dot />
      <Dot />
    </Container>
  )
}
import { ISubtaskProps } from "./ISubtaskProps";

import { Container, Mark, Text } from "./style";
import { useState } from 'react';

export function Subtask({ title, isCompleted }: ISubtaskProps) {
  const [hasCompleted, setHasCompleted] = useState(isCompleted);

  const handleClick = () => {
    setHasCompleted(!hasCompleted)
  }

  return (
    <Container onClick={handleClick} isCompleted={hasCompleted}>
      <Mark />
      <Text>
        {title}
      </Text>
    </Container>
  )
}
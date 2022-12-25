import { CreateTask, Options } from '../../components/Buttons/components';
import { ChevronDown } from '../../components/Icons/components/ChevronDown';
import { Container, IconContainer, Icon, TaskContainer, TaskTitle, ChevronContainer, Buttons } from './style';


export function Navbar() {

  return (
    <Container>
      <IconContainer title="Enterprise logo">
        <Icon />
        <Icon />
        <Icon />
      </IconContainer>

      <TaskContainer>
        <TaskTitle title="Board: Platform Launch" aria-label="Platform Launch">
          Platform Launch
        </TaskTitle>

        <ChevronContainer>
          <ChevronDown iconColor="transparent" />
        </ChevronContainer>
      </TaskContainer>

      <Buttons>
        <CreateTask type="button" disabled>+</CreateTask>
        <Options />
      </Buttons>
    </Container>
  )
}
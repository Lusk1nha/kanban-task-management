import { CreateTask, Options } from '../../components/Buttons/components';
import { ChevronDown } from '../../components/Icons/components/ChevronDown';
import { Container, LogoContainer, LogoTitle, IconContainer, Icon, Content, TaskContainer, TaskTitle, ChevronContainer, Buttons } from './style';


export function Navbar() {

  return (
    <Container>
      <LogoContainer>
        <IconContainer title="Enterprise logo">
          <Icon />
          <Icon />
          <Icon />
        </IconContainer>
        
        <LogoTitle>Kanban</LogoTitle>
      </LogoContainer>

      <Content>
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
      </Content>
    </Container>
  )
}
import { useContext } from 'react';
import { CreateTask, Options } from '../../components/Buttons/components';
import { ChevronDown } from '../../components/Icons/components/ChevronDown';
import { SidebarContext } from '../../contexts/components/SidebarContextProvider';
import { Container, LogoContainer, LogoTitle, IconContainer, Icon, Content, TaskContainer, TaskTitle, ChevronContainer, Buttons } from './style';
import { CurrentBoardContext } from '../../contexts/components/CurrentBoardContextProvider';


export function Navbar() {
  const currentBoard = useContext(CurrentBoardContext)
  const { on } = useContext(SidebarContext)

  return (
    <Container>
      <LogoContainer active={on}>
        <IconContainer title="Enterprise logo">
          <Icon />
          <Icon />
          <Icon />
        </IconContainer>
        
        <LogoTitle title="Kanban" aria-label="Kanban">Kanban</LogoTitle>
      </LogoContainer>

      <Content>
        <TaskContainer>
          <TaskTitle title="Board: Platform Launch" aria-label="Platform Launch">
            {currentBoard.board?.name}
          </TaskTitle>

          <ChevronContainer>
            <ChevronDown iconColor="transparent" />
          </ChevronContainer>
        </TaskContainer>

        <Buttons>
          <CreateTask type="button" disabled={currentBoard.board?.columns?.length === 0}>+</CreateTask>
          <Options type="button" title="App options" aria-label="App options" />
        </Buttons>
      </Content>
    </Container>
  )
}
import { useContext } from 'react';
import { CreateTask, Options } from '../../components/Buttons/components';
import { ChevronDown } from '../../components/Icons/components/ChevronDown';
import { SidebarContext } from '../../contexts/components/SidebarContextProvider';
import { Container, LogoContainer, LogoTitle, IconContainer, Icon, Content, TaskContainer, TaskTitle, ChevronContainer, Buttons } from './style';
import { CurrentBoardContext } from '../../contexts/components/CurrentBoardContextProvider';
import { IButton } from '../../shared/models/IButton';
import { ModalContext } from '../../contexts/components/ModalProvider';

import { TaskCreate } from '../Task/components/TaskCreate';

const buttonsOptions = [
  { text: 'Edit Board', title: 'Edit Board', "aria-label": 'Edit Board', type: 'button' },
  { text: 'Delete Board', variant: 'delete', title: 'Delete Board', "aria-label": 'Delete Board', type: 'button' },
] as IButton[]

export function Navbar() {
  const currentBoard = useContext(CurrentBoardContext)
  const modalContext = useContext(ModalContext);

  const { on } = useContext(SidebarContext)

  const handleAddClick = () => {
    modalContext?.setOpened(true);
    modalContext?.setContent(<TaskCreate />);
  }

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
          <CreateTask type="button" disabled={currentBoard.board?.columns?.length === 0} onClick={handleAddClick}>+</CreateTask>

          <Options
            align="left"
            type="button"
            title="App options"
            aria-label="App options"
            buttons={buttonsOptions}
          />
        </Buttons>
      </Content>
    </Container>
  )
}
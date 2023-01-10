import { useContext } from 'react';
import { CreateTask, Options } from '../../components/Buttons/components';
import { ChevronDown } from '../../components/Icons/components/ChevronDown';
import { SidebarContext } from '../../contexts/components/SidebarContextProvider';
import { Container, LogoContainer, LogoTitle, IconContainer, Icon, Content, TaskContainer, TaskTitle, ChevronContainer, Buttons } from './style';
import { CurrentBoardContext } from '../../contexts/components/CurrentBoardContextProvider';
import { IButton } from '../../shared/models/IButton';
import { ModalContext } from '../../contexts/components/ModalProvider';

import { TaskCreate, BoardEdit, Sidebar } from '../../pages/';
import { BoardDelete } from '../Dialogs/BoardDelete';

import { MobileSidebar } from './../MobileSidebar/index';

export function Navbar() {
  const currentBoard = useContext(CurrentBoardContext)
  const modalContext = useContext(ModalContext);

  const { on } = useContext(SidebarContext)

  const handleOpenSidebarClick = () => {
    modalContext?.setOpened(true);
    modalContext?.setContent(<MobileSidebar />);
  }

  const handleAddTaskClick = () => {
    modalContext?.setOpened(true);
    modalContext?.setContent(<TaskCreate />);
  }

  const handleEditBoardClick = () => {
    if (currentBoard.board?.name) {
      modalContext?.setOpened(true);
      modalContext?.setContent(<BoardEdit name={currentBoard.board?.name} columns={currentBoard.board?.columns} />);
    }
  }

  const handleDeleteBoardClick = () => {
    if (currentBoard.board?.name) {
      modalContext?.setOpened(true);
      modalContext?.setContent(<BoardDelete />);
    }
  }

  const buttonsOptions = [
    { text: 'Edit Board', onClick: handleEditBoardClick, title: 'Edit Board', "aria-label": 'Edit Board', type: 'button' },
    { text: 'Delete Board', onClick: handleDeleteBoardClick, variant: 'delete', title: 'Delete Board', "aria-label": 'Delete Board', type: 'button' },
  ] as IButton[]


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
          <CreateTask type="button" disabled={currentBoard.board?.columns?.length === 0} onClick={handleAddTaskClick}>+</CreateTask>

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
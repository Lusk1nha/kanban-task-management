import { Fragment } from 'react'

import styled from 'styled-components';
import { Navbar, Content } from './pages';
import { useState } from 'react';
import { IBoard } from './shared/models/IBoard';
import { CurrentBoardContextProvider } from './contexts/components/CurrentBoardContextProvider';
import { Modal } from './components/Modal';
import { Sidebar } from './pages/Sidebar';
import { TaskView } from './pages/Task/components/TaskView';

const Container = styled.div`
  background: ${props => props.theme.colors.bgColor};
  width: 100%;
  
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-grow: 1;
`

const currentBoardLocalStorage = localStorage.getItem('currentBoard')
const currentBoardCached = currentBoardLocalStorage != null ? JSON.parse(currentBoardLocalStorage) : null

function App() {
  const [currentBoard, setCurrentBoard] = useState<IBoard | null>(currentBoardCached);
  const [currentModalContent, setCurrentModalContent] = useState<React.ReactNode>(<Sidebar />);

  return (
    <Fragment>
      <CurrentBoardContextProvider board={currentBoard} setBoard={setCurrentBoard}>
        <Container>
          <Navbar />
          <Content />
        </Container>
        
        <Modal>
          <TaskView />
        </Modal>
      </CurrentBoardContextProvider>
    </Fragment>
  )
}

export default App

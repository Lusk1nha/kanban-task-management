import { Fragment } from 'react'

import styled from 'styled-components';
import { Navbar, Content } from './pages';
import { useState } from 'react';
import { IBoard } from './shared/models/IBoard';
import { CurrentBoardContextProvider } from './contexts/components/CurrentBoardContextProvider';
import { Modal } from './components/Modal';
import { Sidebar } from './pages/Sidebar';
import { TaskView } from './pages/TaskView';

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


function App() {

  return (
    <Fragment>
      <Container>
        <Navbar />
        <Content />
      </Container>
    </Fragment>
  )
}

export default App

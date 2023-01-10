import { Fragment } from 'react'

import styled from 'styled-components';
import { Navbar, Content } from './pages';

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

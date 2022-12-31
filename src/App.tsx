import { Fragment } from 'react'

import { GlobalStyle } from './styles';
import { ThemeContextProvider } from './contexts/components/ThemeContextProvider';

import styled from 'styled-components';
import { Navbar, Content } from './pages';

const Container = styled.div`
  background: ${props => props.theme.colors.bgColor};
  width: 100%;
  
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

  return (
    <Fragment>
      <ThemeContextProvider>
        <GlobalStyle />
        
        <Container>
          <Navbar />
          <Content />
        </Container>
      </ThemeContextProvider>
    </Fragment>
  )
}

export default App

import { Fragment } from 'react'

import { GlobalStyle } from './styles';
import { ThemeContextProvider } from './contexts/components/ThemeContextProvider';

import styled from 'styled-components';
import { Navbar } from './pages/Navbar/index';

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
          
        </Container>
      </ThemeContextProvider>
    </Fragment>
  )
}

export default App

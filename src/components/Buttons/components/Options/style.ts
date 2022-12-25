import styled from "styled-components";

export const Container = styled.button`
  background: transparent;

  width: auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${props => props.theme.colors.buttonFontColor};
  font-size: 1rem;
  row-gap: 0.2rem;

  outline: none;
  border: none;

  border-radius: 1.5rem;

  padding: 0 0.5rem;

  cursor: pointer;

  &:disabled {
    opacity: 50%;
    pointer-events: none;
  }
`

export const Dot = styled.div`
  background: ${props => props.theme.colors.buttonDotColor};
  width: 4px;
  height: 4px;

  border-radius: 50%;
`
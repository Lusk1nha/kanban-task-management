import styled from "styled-components";

export const Container = styled.button`
  background: ${props => props.theme.colors.buttonBGColor};

  max-width: 48px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.colors.buttonFontColor};
  font-size: 1rem;

  outline: none;
  border: none;

  border-radius: 1.5rem;

  cursor: pointer;

  &:disabled {
    opacity: 50%;
    pointer-events: none;
  }
`
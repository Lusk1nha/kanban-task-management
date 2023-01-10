import styled from "styled-components";


export const Container = styled.div`
  width: 100%;

  min-height: 25.813rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Bar = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;

  border: 4px;
  border-style: solid;
  border-color: ${props => props.theme.colors.subtaskViewCardBGColor};
  border-right-color: ${props => props.theme.colors.subtaskViewCardBGColorHover};

  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
import styled from "styled-components";

export type Props = {
  isCompleted: boolean;
}


export const Mark = styled.div`
  background-color: ${props => props.theme.colors.subtaskViewCardMarkBGColor};
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    object-fit: auto;
    object-position: 50% 50%;


  min-width: 1rem;
  min-height: 1rem;

  border: 1px solid rgba(130, 143, 163, 0.248914);

  border-radius: 0.125rem;

  z-index: 5;
`

export const Text = styled.p`
  width: 100%;

  color: ${props => props.theme.colors.subtaskViewCardTextColor};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.945rem;

  transition: all 200ms;

  z-index: 5;
`

export const Container = styled.li<Props>`
  background: ${props => props.theme.colors.subtaskViewCardBGColor};
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;

  position: relative;

  padding: 0.75rem 1rem;

  border-radius: 0.25rem;

  column-gap: 1rem;

  cursor: pointer;

  transition: all 150ms linear;

  overflow: hidden;

  &::after {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  &:hover::after {
    background: ${props => props.theme.colors.subtaskViewCardBGColorHover};
    opacity: 25%;
  }

  ${Mark} {
    ${(({ isCompleted }) => isCompleted && `
      background-color: #635FC7;
      background-image: url('/assets/icon-check.svg');
    `)}
  }

  ${Text} {
    ${(({ isCompleted }) => isCompleted && `
      text-decoration-line: line-through;
      opacity: 50%;
    `)}
  }


`


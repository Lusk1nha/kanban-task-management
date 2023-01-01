import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  flex-grow: 1;

  padding: 1.5rem 1rem;
  column-gap: 1.5rem;

  overflow: auto;

  @media screen and (min-width: 700px) {
    padding: 1.5rem 1rem 1.5rem 1.5rem;
  }
`

export const CreateColumnContainer = styled.div`
  height: 100%;
  padding-top: 2rem;
`

export const CreateColumnPanel = styled.button`
  background: ${props => props.theme.colors.createButtonPanelBGColor};
  min-width: 17.5rem;
  width: 17.5rem;
  height: 100%;

  color: ${props => props.theme.colors.createButtonPanelTextColor};
  font-size: 1.5rem;
  font-weight: bold;

  outline: none;
  border: none;

  border-radius: 0.375rem;

  cursor: pointer;

  transition: 150ms color linear;

  &:hover {
    color: ${props => props.theme.colors.createButtonPanelTextColorHover};
  }
`
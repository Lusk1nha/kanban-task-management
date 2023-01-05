import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  
  display: flex;
  flex-direction: Column;
  
  row-gap: 0.5rem;

  outline: none;
  border: none;
`

export const Label = styled.label`
  color: ${props => props.theme.colors.subtaskViewCardTitleTextColor};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.945rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  row-gap: 0.75rem; 
`

export const Render = styled.ul`
  max-height: 200px;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  row-gap: 0.75rem; 

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.313rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(130, 143, 163, 0.25);
    border-radius: 0.25rem;

    transition: background 150ms linear;

    &:hover {
      background: rgba(130, 143, 163, 0.25);
    }
  }
`

export const CreateItemButton = styled.button`
  background: ${props => props.theme.colors.addNewSubtaskButtonBGColor};
  width: 100%;

  color: ${props => props.theme.colors.addNewSubtaskButtonTextColor};
  font-size: 0.813rem;
  font-weight: 700;
  line-height: 1.438rem;
  text-align: center;

  outline: none;
  border: none;

  padding: 0.5rem 1rem;

  border-radius: 1.25rem;

  cursor: pointer;
  user-select: none;
`
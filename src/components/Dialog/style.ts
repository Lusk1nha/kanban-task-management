import styled from "styled-components";

export const Container = styled.section`
  background: ${props => props.theme.colors.taskViewCardBGColor};
  
  max-width: 21.438rem;
  width: 100%;

  display: flex;
  flex-direction: column;

  opacity: 1;

  row-gap: 1.5rem;
  padding: 2rem;

  border-radius: 0.375rem;

  @media screen and (min-width: 700px) {
    max-width: 30rem;
  }
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.dialogTitleTextColor}; 
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.438rem;
`

export const Description = styled.p`
  color: ${props => props.theme.colors.taskViewCardDescriptionTextColor};
  font-size: 0.813rem;
  font-weight: 500;
  line-height: 1.438rem;
`
export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`

export const DeleteButton = styled.button`
  background: ${props => props.theme.colors.dialogDeleteButtonBGColor};
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 0.813rem;
  font-weight: 700;
  line-height: 1.438rem;

  outline: none;
  border: none;

  padding: 0.5rem 1rem;

  border-radius: 1.25rem;

  cursor: pointer;
  user-select: none;

  transition: background 150ms linear;

  &:hover {
    background: ${props => props.theme.colors.dialogDeleteButtonBGColorHover};
  }
`

export const CancelButton = styled.button`
  background: ${props => props.theme.colors.addNewSubtaskButtonBGColor};
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.colors.addNewSubtaskButtonTextColor};
  font-size: 0.813rem;
  font-weight: 700;
  line-height: 1.438rem;

  outline: none;
  border: none;

  padding: 0.5rem 1rem;

  border-radius: 1.25rem;

  cursor: pointer;
  user-select: none;

  transition: background 150ms linear;

  &:hover {
    background: ${props => props.theme.colors.addNewSubtaskButtonBGColorHover};
  }
`
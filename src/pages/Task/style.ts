import styled from "styled-components";

export const Container = styled.li`
  background: ${props => props.theme.colors.taskBGColor};
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 1.438rem 1rem;
  border-radius: 0.5rem;

  row-gap: 0.5rem;
  
  list-style: none;

  cursor: pointer;
  user-select: none;

  transition: 150ms transform linear;

  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);

  &:hover {
    transform: scale(1.05);
  }
`

export const Title = styled.h3`
  color: ${props => props.theme.colors.taskTitleTextColor};
  font-size: 0.938rem;
  font-weight: bold;

  transition: 150ms color linear;
  
  ${Container}:hover & {
    color: ${props => props.theme.colors.taskTitleTextColorHover};
  }
`

export const SubtasksInfo = styled.span`
  color: ${props => props.theme.colors.taskSubtaskCountTextColor};
  font-size: 0.75rem;
  font-weight: bold;
`

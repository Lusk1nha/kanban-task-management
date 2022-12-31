import styled from "styled-components";

export const Container = styled.li`
  background: ${props => props.theme.colors.taskBGColor};

  display: flex;
  flex-direction: column;

  padding: 1.438rem 1rem;
  border-radius: 0.5rem;

  row-gap: 0.5rem;
  
  list-style: none;

  cursor: pointer;

  transition: 200ms transform;

  &:hover {
    transform: scale(1.05);
  }
`

export const Title = styled.h3`
  color: ${props => props.theme.colors.taskTitleTextColor};
  font-size: 0.938rem;
  font-weight: bold;
`

export const SubtasksInfo = styled.span`
  color: ${props => props.theme.colors.taskSubtaskCountTextColor};
  font-size: 0.75rem;
  font-weight: bold;
`

import styled from "styled-components";

interface CircleProps {
  currentPosition: number
}

export const Container = styled.div`
  width: 280px;

  display: flex;
  flex-direction: column;

  row-gap: 1rem;
`

export const Details = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  column-gap: 0.5rem;
`

export const Circle = styled.div<CircleProps>`
  background: ${props => props.currentPosition == 0 ? props.theme.colors.taskStatusColor1 : props.currentPosition == 1 ? props.theme.colors.taskStatusColor2 : props.theme.colors.taskStatusColor3};
  width: 15px;
  height: 15px;

  border-radius: 50%;
`


export const Name = styled.h3`
  color: ${props => props.theme.colors.columnNameTextColor};
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 0.15rem;
`


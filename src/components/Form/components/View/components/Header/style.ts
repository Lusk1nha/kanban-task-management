import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  column-gap: 1rem;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.taskViewCardTitleTextColor}; 
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.438rem;
`
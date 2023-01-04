import styled from "styled-components";

export const Container = styled.section`
  background: ${props => props.theme.colors.taskViewCardBGColor};

  max-width: 21.438rem;
  width: 100%;

  display: flex;
  flex-direction: column;

  opacity: 1;

  row-gap: 1.5rem;
  padding: 1.5rem;

  border-radius: 0.375rem;

  @media screen and (min-width: 700px) {
    max-width: 30rem;
  }
`

export const Header = styled.article`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.taskViewCardTitleTextColor}; 
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.438rem;

  text-align: center;
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  flex-grow: 1;

  row-gap: 1.5rem;
`

export const CreateTaskButton = styled.button`
  background: #635FC7;
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
    background: #A8A4FF;
  }
`
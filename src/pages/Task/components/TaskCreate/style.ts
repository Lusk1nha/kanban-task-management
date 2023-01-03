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

  padding-right: 2rem;
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  flex-grow: 1;

  row-gap: 1.5rem;
`
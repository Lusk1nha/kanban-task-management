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

export const Description = styled.p`
  color: ${props => props.theme.colors.taskViewCardDescriptionTextColor};
  font-size: 0.813rem;
  font-weight: 500;
  line-height: 1.438rem;
`
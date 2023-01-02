import styled from "styled-components";

export const Container = styled.section`
  background: ${props => props.theme.colors.taskViewCardBGColor};

  max-width: 21.438rem;
  width: 100%;

  display: flex;
  flex-direction: column;

  opacity: 1;

  row-gap: 1.5rem;
  padding: 1.5rem 1.5rem 2rem;

  border-radius: 0.375rem;

  @media screen and (min-width: 700px) {
    max-width: 30rem;
  }
`
export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.taskViewCardTitleTextColor}; 
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.418rem;

  @media screen and (min-width: 700px) {
    padding-right: 2rem;
  }
`

export const Main = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 1.5rem;
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

  row-gap: 1rem;
`

export const SectionName = styled.h5`
  color: ${props => props.theme.colors.subtaskViewCardTitleTextColor};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.945rem;
`

export const Footer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 0.5rem;
`
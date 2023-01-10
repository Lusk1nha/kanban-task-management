import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 1rem;
`

export const Label = styled.label`
  color: ${props => props.theme.colors.subtaskViewCardTitleTextColor};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.945rem;
`

export const Wrapper = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 0.5rem;

  list-style: none;
`
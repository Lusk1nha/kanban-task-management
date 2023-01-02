import styled from "styled-components";

export const Container = styled.ul`
  background: ${props => props.theme.colors.dropdownOptionsBGColor};
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 0.5rem;

  position: absolute;
  top: 120%;

  padding: 1rem;
  /* box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25); */

  border-radius: 0.5rem;

  cursor: pointer;
  user-select: none;
`
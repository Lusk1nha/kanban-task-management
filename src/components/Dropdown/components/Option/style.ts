import styled from "styled-components";

export const Container = styled.li`
  width: 100%;

  color: #828FA3;
  font-size: 0.813rem;
  font-weight: 500;
  line-height: 1.438rem; 

  list-style: none;

  transition: all 150ms linear;

  &:hover {
    color: ${props => props.theme.colors.dropdownCurrentValueTextColor};
  }
`
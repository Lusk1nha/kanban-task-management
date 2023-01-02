import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  position: relative;
`

export const Output = styled.div`
  background: transparent;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0.25rem;

  padding: 0.5rem 1rem;

  transition: 200ms all ease;

  border: 1px solid rgba(130, 143, 163, 0.25);

  cursor: pointer;
  user-select: none;

  &:hover {
    border: 1px solid #635FC7;
  }
`

export const CurrentValue = styled.p`
  color: ${props => props.theme.colors.dropdownCurrentValueTextColor};
  font-size: 0.813rem;
  font-weight: 500;
  line-height: 1.438rem;
`
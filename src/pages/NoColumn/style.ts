import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.563rem;

  padding: 2rem 1rem;
`

export const Text = styled.h5`
  color: ${props => props.theme.colors.noColumnTextColor};
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
`

export const AddColumnButton = styled.button.attrs(() => ({
  type: 'button'
}))`
  background: ${props => props.theme.colors.noColumnButtonBGColor};

  color: white;
  font-size: 0.938rem;
  font-weight: bold;

  outline: none;
  border: none;

  padding: 1rem 1.25rem;

  border-radius: 1.5rem;

  cursor: pointer;
`
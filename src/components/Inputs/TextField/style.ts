import styled from "styled-components";

export const Container = styled.fieldset`
  width: 100%;

  display: flex;
  flex-direction: Column;

  row-gap: 0.5rem;

  outline: none;
  border: none;
`

export const Label = styled.label`
  color: ${props => props.theme.colors.subtaskViewCardTitleTextColor};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.945rem;
`


export const Singleline = styled.input`
  background: transparent;

  width: 100%;
  min-height: 2.5rem;

  color: ${props => props.theme.colors.subtaskViewCardTextColor};
  font-size: 0.813rem;
  font-weight: 500;
  line-height: 1.438rem;

  border: 1px solid rgba(130, 143, 163, 0.25);
  outline: none;

  border-radius: 0.25rem;

  padding: 0.5rem 1rem;

  resize: none;

  &::placeholder {
    opacity: 50%;
    mix-blend-mode: normal;
  }
`

export const Multiline = styled.textarea`
  background: transparent;

  width: 100%;
  min-height: 2.5rem;

  color: ${props => props.theme.colors.subtaskViewCardTextColor};
  font-size: 0.813rem;
  font-weight: 500;
  line-height: 1.438rem;

  border: 1px solid rgba(130, 143, 163, 0.25);
  outline: none;

  border-radius: 0.25rem;

  padding: 0.5rem 1rem;

  resize: none;

  &::placeholder {
    opacity: 50%;
    mix-blend-mode: normal;
  }
`
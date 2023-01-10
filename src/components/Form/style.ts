import styled from "styled-components"

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  flex-grow: 1;

  row-gap: 1.5rem;
`

export const Footer = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 0.5rem;
`

export const SubmitButton = styled.button`
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
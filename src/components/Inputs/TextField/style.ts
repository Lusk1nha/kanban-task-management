import styled from "styled-components";

type ContainerProps = {
  hasError?: boolean;
}

export const Label = styled.label`
  color: ${props => props.theme.colors.subtaskViewCardTitleTextColor};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.945rem;
`

export const Wrapper = styled.div` 
  background: transparent;
  width: 100%;

  display: flex;
  align-items: center;

  border: 1px solid rgba(130, 143, 163, 0.25);
  outline: none;
  
  border-radius: 0.25rem;
  
  transition: border 150ms linear;

  &:hover {
    border: 1px solid #635FC7;
  }
`

export const InputArea = styled.textarea`
  background: transparent;

  width: 100%;
  height: 100%;

  color: ${props => props.theme.colors.subtaskViewCardTextColor};
  font-size: 0.813rem;
  font-weight: 500;
  line-height: 1.438rem;

  outline: none;
  border: none;

  border-radius: 0.25rem;

  resize: none;

  transition: border 150ms linear;

  margin: 0.2rem;
  padding: 0.5rem 1rem;

  &::placeholder {
    opacity: 50%;
    mix-blend-mode: normal;
  }
  
  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #635FC7;
    border-radius: 0.25rem;

    transition: background 150ms linear;

    &:hover {
      background: #635FC7;
    }
  }
`

export const InputText = styled.input.attrs(() => ({
  type: "text"
}))`
  background: transparent;

  width: 100%;
  height: 100%;

  color: ${props => props.theme.colors.subtaskViewCardTextColor};
  font-size: 0.813rem;
  font-weight: 500;
  line-height: 1.438rem;

  outline: none;
  border: none;

  border-radius: 0.25rem;

  resize: none;

  transition: border 150ms linear;

  margin: 0.2rem;
  padding: 0.5rem 1rem;

  &::placeholder {
    opacity: 50%;
    mix-blend-mode: normal;
  }
`



export const Container = styled.fieldset<ContainerProps>`
  width: 100%;

  display: flex;
  flex-direction: Column;

  row-gap: 0.5rem;

  outline: none;
  border: none;

  ${(({ hasError }) => hasError && `
    ${Wrapper} {
      color: #EA5555;
      border: 1px solid #EA5555;

      &::-webkit-scrollbar {
        width: 0.313rem;
      }
    
      &::-webkit-scrollbar-track {
        border-radius: 10px;
      }
    
      &::-webkit-scrollbar-thumb {
        background: #EA5555;
        border-radius: 0.25rem;
    
        transition: background 150ms linear;
    
        &:hover {
          background: #EA5555;
        }
      }
    }
  `)}
`


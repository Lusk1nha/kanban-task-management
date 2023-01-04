import styled from "styled-components";

type ContainerProps = {
  hasError: boolean;
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

export const Input = styled.textarea`
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

  padding: 0.5rem 1rem;


  &::placeholder {
    opacity: 50%;
    mix-blend-mode: normal;
  }

  &::-webkit-scrollbar {
    width: 0.313rem;
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

export const ErrorMessage = styled.p`
  max-width: 6.875rem;
  width: 60%;

  display: none;

  color: #EA5555;
  font-size: 0.813rem;
  font-weight: 500;
  line-height: 1.438rem;

  text-align: left;

  padding: 0.5rem 0;
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

    ${ErrorMessage} {
      display: block;
    }
  `)}
`


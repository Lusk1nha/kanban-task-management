import styled from "styled-components";

type ButtonProps = {
  variant?: 'normal' | 'delete'
}

type ContentProps = {
  align: 'left' | 'center' | 'right'
}

export const Container = styled.div`
  position: relative;
`

export const Button = styled.button`
  background: transparent;

  width: auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${props => props.theme.colors.buttonFontColor};
  font-size: 1rem;
  row-gap: 0.2rem;

  outline: none;
  border: none;

  border-radius: 1.5rem;

  padding: 0 0.5rem;

  cursor: pointer;

  &:disabled {
    opacity: 50%;
    pointer-events: none;
  }
`

export const Dot = styled.div`
  background: ${props => props.theme.colors.buttonDotColor};
  width: 0.231rem;
  height: 0.231rem;

  border-radius: 50%;
`

export const OptionsContent = styled.div<ContentProps>`
  background: ${props => props.theme.colors.optionsContentBGColor};
  width: 12rem;
  position: absolute;
  top: 200%;

  display: flex;
  flex-direction: column;

  row-gap: 1rem;

  transform: translateX(-45%);

  padding: 1rem;

  border-radius: 0.5rem;

  z-index: 500;

  ${(({ align }) => {
    if(align == 'left') {
      return `
        transform: translateX(-90%);
      `
    }
  })}
`

export const OptionButton = styled.button<ButtonProps>`
  background: none;
  width: 100%;

  display: flex;

  color: #828FA3;
  font-size: 0.813rem;
  font-weight: 500;
  line-height: 1.438rem;
  text-align: center;

  border: none;
  outline: none;

  cursor: pointer;

  user-select: none;

  transition: all 150ms linear;

  &:hover {
    color: ${props => props.theme.colors.subtaskViewCardTextColor};
  }

  &:disabled {
    opacity: 50%;
    pointer-events: none;
    cursor: default;
  }

  ${(({ variant }) => {
    if (variant != null) {
      if (variant === 'delete') {
        return `
            color: #EA5555;
          `
      }
    }
  })}
`

import styled from 'styled-components'
import { Board } from '../../components/Icons/components/Board';


type DropdownProps = {
  active?: boolean;
}

export const Container = styled.aside`
  background: ${props => props.theme.colors.navColor};
  min-width: 16.25rem;
  height: 100%;

  display: none;
  
  border-right: 1px solid ${props => props.theme.colors.sidebarBorderColor};

  padding: 1rem 0 1rem 0;

  z-index: 10;

  @media screen and (min-width: 700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
  }
`

export const BoardCountText = styled.h5`
  width: 100%;

  color: ${props => props.theme.colors.sidebarBoardCountTextColor};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15rem;

  padding-left: 1rem;
  margin-bottom: 1.188rem;
`

export const ThemeContainer = styled.div`
  background: ${props => props.theme.colors.sidebarThemeBGColor};

  max-width: 14.688rem;
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 1.5rem;

  border-radius: 0.375rem;

  margin-bottom: 1rem;
`

export const Dropdown = styled.button<DropdownProps>`
  background: ${props => props.theme.colors.sidebarDropdownBGColor};

  max-width: 2.5rem;
  width: 100%;
  height: 1.25rem;

  position: relative;

  border-radius: 0.75rem;

  outline: none;
  border: none;

  cursor: pointer;

  transition: 150ms background linear;

  &:hover {
    background: ${props => props.theme.colors.sidebarDropdownBGColorHover};
  }

  &:before {
    content: '';

    background: white;
    width: 0.875rem;
    height: 0.875rem;

    position: absolute;
    top: 0;
    bottom: 0;
    right: unset;
    left: 12%;

    transform: translate(0, 20%);

    border-radius: 50%;

    transition: 150ms all linear;

    ${({ active }) => active && `
      left: unset;
      right: 12%;
    `}
  }
`

export const HideSideBarButton = styled.button`
  background: transparent;
  width: 100%;
  height: 3rem;

  color: ${props => props.theme.colors.sidebarHideButtonTextColor};
  font-size: 0.938rem;
  font-weight: 700;

  display: flex;
  align-items: center;

  column-gap: 0.625rem;

  border: none;
  outline: none;

  border-top-right-radius: 6.25rem;
  border-bottom-right-radius: 6.25rem;

  margin-right: 1.25rem;
  margin-bottom: 2rem;
  padding-left: 1.5rem;

  cursor: pointer;

  transition: 150ms background linear;

  &:hover {
    background: ${props => props.theme.colors.sidebarBoardItemBGColorHover};
    color: ${props => props.theme.colors.sidebarBoardItemTextColorHover};
  }
`
export const BoardsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding-right: 1.25rem;
`

export const StyledBoardIcon = styled(Board)`
`

export const CreateBoardButton = styled.button`
  background: transparent;
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;

  column-gap: 0.75rem;

  color: ${props => props.theme.colors.sidebarCreateBoardButtonTextColor};
  font-size: 0.938rem;
  font-weight: 700;

  border: none;
  outline: none;

  padding: 1rem 1.5rem 1rem 1rem;

  cursor: pointer;
`
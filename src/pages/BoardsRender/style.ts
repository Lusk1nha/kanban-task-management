import styled from 'styled-components'

type ItemProps = {
  active?: boolean;
}


export const Container = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const Item = styled.li<ItemProps>`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;

  column-gap: 0.75rem;
  
  color: ${props => props.theme.colors.sidebarBoardItemTextColor};
  font-size: 0.938rem;
  font-weight: bold;

  padding: 1rem 1.5rem 1rem 1rem;

  border-top-right-radius: 6.25rem;
  border-bottom-right-radius: 6.25rem;

  transition: all 300ms ease;

  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.sidebarBoardItemBGColorHover};
    color: ${props => props.theme.colors.sidebarBoardItemTextColorHover};
  }

  ${({ theme, active }) => active && `
    background:  ${theme.colors.sidebarBoardItemBGColor};
    color: ${theme.colors.sidebarBoardItemActiveTextColor};

    cursor: default;

    pointer-events: none;

    &:hover {
      background:  ${theme.colors.sidebarBoardItemBGColor};
      color: ${theme.colors.sidebarBoardItemActiveTextColor};
    }
  `}
`
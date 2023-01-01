import styled from "styled-components";

type OpenSidebarButtonProps = {
  active?: boolean;
}

export const Container = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-grow: 1;
`

export const WrapperWithRelative = styled.section`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;

  overflow: hidden;
`

export const OpenSideBarButton = styled.button<OpenSidebarButtonProps>`
  background: ${props => props.theme.colors.sidebarOpenButtonBGColor};

  width: 50px;
  height: 3rem;
  position: absolute;

  display: none;

  color: ${props => props.theme.colors.sidebarOpenButtonTextColor};

  left: 0;
  bottom: 10%;

  border-top-right-radius: 6.25rem;
  border-bottom-right-radius: 6.25rem;

  border: none;
  outline: none;

  cursor: pointer;

  transition: 150ms background linear;

  &:hover {
    background: ${props => props.theme.colors.sidebarOpenButtonBGColorHover};
  }

  @media screen and (min-width: 700px) {
    display: none;

    ${({ active }) => active && `
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  }
`
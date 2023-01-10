import styled from "styled-components";

type LogoContainerProps = {
  active?: boolean;
}

export const Container = styled.nav`
  background: ${props => props.theme.colors.navColor};

  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;

  z-index: 2000;
  
  @media screen and (min-width: 700px) {
    z-index: 10;
  }
`

export const LogoContainer = styled.div<LogoContainerProps>`

  height: 100%;
  display: flex;
  align-items: center;
  
  padding: 0 0 0 1rem;

  @media screen and (min-width: 700px) {
    max-width: 12.563rem;
    width: 100%;

    border-right: 1px solid ${props => props.theme.colors.sidebarBorderColor};

    padding: 0 1rem;

    ${(({ active }) => active && `
      max-width: 16.25rem;
    `)}
  }
`

export const LogoTitle = styled.h2`
  color: ${props => props.theme.colors.navLogoTitleTextColor};
  font-size: 1.5rem;
  font-weight: bold;
  display: none;

  @media screen and (min-width: 700px) {
    display: block;
  }
`

export const IconContainer = styled.section`
  width: auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 0.25rem;

  
  @media screen and (min-width: 700px) {
    margin-right: 1rem;
  }
`

export const Icon = styled.div`
  width: 6px;
  height: 26px;
  
  display: flex;
  flex-grow: 1;

  border-radius: 0.125rem;

  &:nth-child(1) {
    background: ${props => props.theme.colors.navIconTileOne};
  }

  &:nth-child(2) {
    background: ${props => props.theme.colors.navIconTileTwo};
  }

  &:nth-child(3) {
    background: ${props => props.theme.colors.navIconTileThree};
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  padding: 1rem;
`

export const TaskContainer = styled.section`
  height: 100%;

  display: flex;
  align-items: center;

  margin-right: auto;

  cursor: pointer;

  pointer-events: all;

  @media screen and (min-width: 700px) {
    pointer-events: none;
  }
`;

export const TaskTitle = styled.h3`
  color: ${props => props.theme.colors.taskTitleColor};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.438rem;

  margin-right: 0.5rem;

  @media screen and (min-width: 700px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
 `

export const ChevronContainer = styled.div`
  width: 15px;
  height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 700px) {
    display: none;
  }
`

export const Buttons = styled.section`
  max-width: 80px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
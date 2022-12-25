import styled from "styled-components";

export const Container = styled.nav`
  background: ${props => props.theme.colors.navColor};

  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;

  padding: 1rem 1rem;
`

export const IconContainer = styled.section`
  width: auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 0.25rem;

  margin-right: 1rem;
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

export const TaskContainer = styled.section`
  height: 100%;

  display: flex;
  align-items: center;

  margin-right: auto;

  cursor: pointer;
`;

export const TaskTitle = styled.h3`
  color: ${props => props.theme.colors.taskTitleColor};
  font-size: 1.125rem;
  font-weight: 800;

  margin-right: 0.5rem;
`

export const ChevronContainer = styled.div`
  width: 15px;
  height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Buttons = styled.section`
  max-width: 80px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
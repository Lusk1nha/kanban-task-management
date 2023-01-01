import { Container, BoardCountText, ThemeContainer, HideSideBarButton, Dropdown, BoardsContainer, CreateBoardButton } from "./style";
import { useContext } from 'react';
import { SidebarContext } from './../../contexts/components/SidebarContextProvider/index';
import { SunIcon, MoonIcon } from "../../components/Icons/components";
import { ThemeContext } from './../../contexts/components/ThemeContextProvider/index';
import { BoardsContext } from './../../contexts/components/BoardsContextProvider/index';
import { BoardsRender } from "../BoardsRender";

export function Sidebar() {
  const { onChange } = useContext(SidebarContext)
  const { theme, onThemeChange } = useContext(ThemeContext)
  const { boards } = useContext(BoardsContext)

  return (
    <Container>
      <BoardCountText>ALL BOARDS ({boards?.length})</BoardCountText>

      <BoardsContainer>
        <BoardsRender boards={boards} />
        <CreateBoardButton title="Create new board" aria-label="Create a new board">
          + Create New Board
        </CreateBoardButton>
      </BoardsContainer>

      <ThemeContainer>
        <SunIcon />
        <Dropdown
          title="Change app theme"
          aria-label={theme}
          onClick={onThemeChange}
          active={theme != 'light'}
        />
        <MoonIcon />
      </ThemeContainer>

      <HideSideBarButton title="Hide sidebar" aria-label="Hide sidebar" onClick={onChange}>
        Hide Sidebar
      </HideSideBarButton>
    </Container>
  )
}
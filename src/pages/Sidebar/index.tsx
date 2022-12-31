import { Container, BoardCountText, RenderBoard, BoardItem, CreateBoardButton, ThemeContainer, HideSideBarButton, Dropdown } from "./style";
import { useContext } from 'react';
import { SidebarContext } from './../../contexts/components/SidebarContextProvider/index';
import { SunIcon, MoonIcon } from "../../components/Icons/components";
import { ThemeContext } from './../../contexts/components/ThemeContextProvider/index';

export function Sidebar() {
  const { onChange } = useContext(SidebarContext)
  const { theme, onThemeChange } = useContext(ThemeContext)

  return (
    <Container>
      <BoardCountText>ALL BOARDS (3)</BoardCountText>

      <RenderBoard>
        <BoardItem active>Platform Launch</BoardItem>
        <BoardItem>Marketing Plan</BoardItem>
        <BoardItem>Roadmap</BoardItem>

        <CreateBoardButton title="Create new board" aria-label="Create a new board">
          + Create New Board
        </CreateBoardButton>
      </RenderBoard>

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
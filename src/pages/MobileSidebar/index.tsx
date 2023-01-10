import { Container, BoardCountText, ThemeContainer, HideSideBarButton, Dropdown, BoardsContainer, CreateBoardButton, StyledBoardIcon } from "./style";
import { useContext } from 'react';
import { SidebarContext } from './../../contexts/components/SidebarContextProvider/index';
import { SunIcon, MoonIcon } from "../../components/Icons/components";
import { ThemeContext } from './../../contexts/components/ThemeContextProvider/index';
import { BoardsContext } from './../../contexts/components/BoardsContextProvider/index';
import { BoardsRender } from "../BoardsRender";
import { BoardCreate } from "../Forms/BoardCreate";
import { ModalContext } from "../../contexts/components/ModalProvider";
import { HideSidebarIcon } from './../../components/Icons/components/HideSidebarIcon/index';

export function MobileSidebar() {
  const { onChange } = useContext(SidebarContext)
  const { theme, onThemeChange } = useContext(ThemeContext)
  const { boards } = useContext(BoardsContext)

  const modalContext = useContext(ModalContext);

  const handleAddClick = () => {
    modalContext?.setOpened(true);
    modalContext?.setContent(<BoardCreate />);
  }

  return (
    <Container>
      <BoardCountText>ALL BOARDS ({boards?.length})</BoardCountText>

      <BoardsContainer>
        <BoardsRender boards={boards} />
        <CreateBoardButton title="Create new board" aria-label="Create a new board" onClick={handleAddClick}>
          <StyledBoardIcon iconColor="#635FC7" />
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
        <HideSidebarIcon />
        Hide Sidebar
      </HideSideBarButton>
    </Container>
  )
}
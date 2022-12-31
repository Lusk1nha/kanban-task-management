import { Board } from "../Board";
import { Sidebar } from "../Sidebar";
import { Container, WrapperWithRelative, OpenSideBarButton } from "./style";
import { VisionIcon } from '../../components/Icons/components';
import { useContext } from "react";

import { SidebarContext } from './../../contexts/components/SidebarContextProvider/index';

export function Content() {
  const { on, onChange } = useContext(SidebarContext)

  const handleOpenSideClick = () => {
    onChange()
  }

  return (
    <Container>
      {
        on
          ? <Sidebar />
          : null
      }

      <WrapperWithRelative>
        <OpenSideBarButton title="Open sidebar" aria-label="Open sidebar" active={!on} onClick={handleOpenSideClick}>
          <VisionIcon />
        </OpenSideBarButton>

        <Board />
      </WrapperWithRelative>
    </Container>
  )
}
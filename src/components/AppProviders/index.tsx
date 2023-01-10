import { useState } from "react";
import { BoardsContextProvider } from "../../contexts/components/BoardsContextProvider";
import { CurrentBoardContextProvider } from "../../contexts/components/CurrentBoardContextProvider";
import { ModalProvider } from "../../contexts/components/ModalProvider";
import { SidebarContextProvider } from "../../contexts/components/SidebarContextProvider";
import { ThemeContextProvider } from "../../contexts/components/ThemeContextProvider";
import { IBoard } from "../../shared/models/IBoard";
import { GlobalStyle } from "../../styles";
import { IAppProvidersProps } from "./IAppProvidersProps";

import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";

const currentBoardLocalStorage = localStorage.getItem('currentBoard')
const currentBoardCached = currentBoardLocalStorage != null ? JSON.parse(currentBoardLocalStorage) : null

const queryClient = new QueryClient()

export default function AppProviders({ children }: IAppProvidersProps) {
  const [currentBoard, setCurrentBoard] = useState<IBoard | null>(currentBoardCached);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <BoardsContextProvider>
          <SidebarContextProvider>
            <CurrentBoardContextProvider board={currentBoard} setBoard={setCurrentBoard}>
              <GlobalStyle />
              <ModalProvider>
                {children}
              </ModalProvider>
            </CurrentBoardContextProvider>
          </SidebarContextProvider>
        </BoardsContextProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}
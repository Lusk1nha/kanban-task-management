import { BoardsContextProvider } from "../../contexts/components/BoardsContextProvider";
import { SidebarContextProvider } from "../../contexts/components/SidebarContextProvider";
import { ThemeContextProvider } from "../../contexts/components/ThemeContextProvider";
import { GlobalStyle } from "../../styles";
import { IAppProvidersProps } from "./IAppProvidersProps";

export default function AppProviders({ children }: IAppProvidersProps) {
  return (
    <ThemeContextProvider>
      <BoardsContextProvider>
        <SidebarContextProvider>
          <GlobalStyle />
          {children}
        </SidebarContextProvider>
      </BoardsContextProvider>
    </ThemeContextProvider>
  );
}
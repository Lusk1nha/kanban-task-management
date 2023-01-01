import { ICurrentBoardContextProvider } from "./ICurrentBoardContextProvider";
import { createContext } from 'react';

import { ICurrentBoardContextProps } from './ICurrentBoardContextProps';

export const CurrentBoardContext = createContext<ICurrentBoardContextProps>({ board: null, setBoard: () => {}});

export function CurrentBoardContextProvider({ children, board, setBoard }: ICurrentBoardContextProvider) {  
  return (
    <CurrentBoardContext.Provider value={{board, setBoard}}>
      {children}
    </CurrentBoardContext.Provider>
  )
}
import { createContext, useState } from 'react';
import { BoardsContextProps } from './BoardsContextProps';
import { BoardsContextProviderProps } from './BoardsContextProviderProps';
import { useEffect } from 'react';

const BoardsLocalStorage = localStorage.getItem('boards')
const CachedBoards = BoardsLocalStorage !== null ? JSON.parse(BoardsLocalStorage) : []

export const BoardsContext = createContext<BoardsContextProps>(CachedBoards)

export function BoardsContextProvider({ children }: BoardsContextProviderProps) {
  const [boards, setBoards] = useState(CachedBoards);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch('data.json')
        const response = await data.json();
        const result = response.boards
  
        setBoards(result)
        localStorage.setItem('boards', JSON.stringify(result))
      } catch (error) {
        throw error
      }
    }
    
    getData()
  }, [])

  return (
    <BoardsContext.Provider value={{ boards }}>
      {children}
    </BoardsContext.Provider>
  )
}
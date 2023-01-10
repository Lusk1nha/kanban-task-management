import { IBoardsRenderProps } from "./IBoardsRenderProps";
import { Container, Item } from "./style";
import { IBoard } from './../../shared/models/IBoard';
import { useContext } from 'react';
import { CurrentBoardContext } from './../../contexts/components/CurrentBoardContextProvider/index';
import { Board } from "../../components/Icons/components/Board";
import { StyledBoardIcon } from './../Sidebar/style';


export function BoardsRender({ boards }: IBoardsRenderProps) {
  const currentBoard = useContext(CurrentBoardContext)

  const onItemClick = (board: IBoard) => {
    currentBoard.setBoard(board)
    localStorage.setItem('currentBoard', JSON.stringify(board))
  }

  return (
    <Container>
      {
        boards.map((board, id) => {
          return (
            <Item
              key={board.name + id}
              title={board.name}
              aria-label={board.name}
              onClick={() => onItemClick(board)}
              active={board.name == currentBoard.board?.name}>
              <StyledBoardIcon iconColor="#828FA3" />
              {board.name}
            </Item>
          )
        })
      }
    </Container>
  )
}
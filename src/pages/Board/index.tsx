import { NoColumn } from "../NoColumn";
import { Container } from "./style";

import { ColumnsRender } from '../ColumnsRender';
import { CurrentBoardContext } from './../../contexts/components/CurrentBoardContextProvider/index';
import { useContext } from 'react';

export function Board() {
  const currentBoard = useContext(CurrentBoardContext)

  return (
    <Container>
      {
        currentBoard?.board?.columns?.length == 0
          ? <NoColumn />
          : <ColumnsRender columns={currentBoard?.board?.columns ?? []} />
      }
    </Container>
  )
}
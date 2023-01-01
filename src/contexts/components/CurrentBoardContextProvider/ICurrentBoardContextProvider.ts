import { IBoard } from './../../../shared/models/IBoard';

export interface ICurrentBoardContextProvider {
  children: React.ReactNode;
  board: IBoard | null;
  setBoard: React.Dispatch<React.SetStateAction<IBoard | null>>
}
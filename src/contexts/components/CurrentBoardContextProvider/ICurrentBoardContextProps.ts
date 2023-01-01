import { IBoard } from "../../../shared/models/IBoard"

export interface ICurrentBoardContextProps {
  board: IBoard | null;
  setBoard: React.Dispatch<React.SetStateAction<IBoard | null>>
}
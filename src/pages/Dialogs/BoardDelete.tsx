import { useContext } from "react";
import { Dialog } from "../../components/Dialog";
import { CurrentBoardContext } from "../../contexts/components/CurrentBoardContextProvider";

export function BoardDelete() {
  const currentBoard = useContext(CurrentBoardContext)

  return (
    <Dialog
      title="Delete this board?"
      description={`Are you sure you want to delete the ‘${currentBoard.board?.name}’ board? This action will remove all columns and tasks and cannot be reversed.`}
      deleteButton="Delete"
      cancelButton="Cancel"
    />
  )
}
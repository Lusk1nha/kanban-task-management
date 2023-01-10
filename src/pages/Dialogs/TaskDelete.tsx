import { Dialog } from "../../components/Dialog";

interface IProps {
  name: string;
}

export function TaskDelete({ name }: IProps) {
  return (
    <Dialog
      title="Delete this task?"
      description={`Are you sure you want to delete the ‘${name}’ task and its subtasks? This action cannot be reversed.`}
      deleteButton="Delete"
      cancelButton="Cancel"
    />
  )
}
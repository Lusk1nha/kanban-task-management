import { Container, Description } from "./style"
import { Form } from '../../../components';

import * as Yup from "yup";
import { useContext, useState } from "react";
import { CurrentBoardContext } from "../../../contexts/components/CurrentBoardContextProvider";

import { IColumn } from "../../../shared/models/IColumn";
import { ISubtask } from "../../../shared/models/ISubtask";
import { SubtaskRender } from "../../SubtaskRender";
import { IButton } from "../../../shared/models/IButton";
import { TaskEdit } from "../TaskEdit";
import { ModalContext } from "../../../contexts/components/ModalProvider";
import { TaskDelete } from "../../Dialogs/TaskDelete";

type Task = {
  title: string;
  description: string | null;
  subtasks: ISubtask[];
  status: string;
}

interface ITaskViewProps {
  title: string;
  description: string | null;
  status: string;
  subtasks: ISubtask[]
}

export function TaskView({ title, description, subtasks, status }: ITaskViewProps) {
  const [statusDropdownOpen, setStatusDropdownOpen] = useState<boolean>(false)

  const currentBoard = useContext(CurrentBoardContext)
  const boardColumns = currentBoard?.board?.columns ?? []

  const modalContext = useContext(ModalContext);

  const getAllColumns = (columns: IColumn[]): string[] => {
    return columns.map(column => {
      return column.name
    })
  }

  const onClickInDropdown = () => {
    setStatusDropdownOpen(!statusDropdownOpen)
  }

  const handleClickInContent = (event: any) => {
    event.stopPropagation()
  }

  const ValidationSchema = Yup.object().shape({
    subtasks: Yup.array().of(
      Yup.object().shape({
        title: Yup
          .string()
          .required('Can’t be empty'),

        isCompleted: Yup
          .bool()
          .required()
      })
    ),
    
    status: Yup
      .string()
      .required('Can’t be empty')
  })

  const editTaskOnClick = () => {
    modalContext?.setContent(<TaskEdit title={title} description={description} subtasks={subtasks} status={status} />);
  }

  const deleteTaskOnClick = () => {
    modalContext?.setContent(<TaskDelete name={title} />);
  }

  const ButtonsOptions = [
    { text: 'Edit Task', onClick: editTaskOnClick, title: 'Edit Task', "aria-label": 'Edit Task', type: 'button' },
    { text: 'Delete Task', onClick: deleteTaskOnClick, variant: 'delete', title: 'Delete Task', "aria-label": 'Delete Task', type: 'button' },
  ] as IButton[]

  return (
    <Container onClick={handleClickInContent}>
      <Form<Task>
        name="Edit Task"
        mode="all"
        validationSchema={ValidationSchema}
        defaultValues={{
          subtasks,
          status: status
        }}
        content={{
          header: {
            components: [
              {
                type: "Title",
                parameters: {
                  children: title,
                  title: title
                }
              },
              {
                type: "Options",
                parameters: {
                  buttons: ButtonsOptions
                }
              }
            ]
          },
          main: {
            components: [
              {
                type: "Custom",
                parameters: {
                  children: <Description>{description}</Description>
                }
              },
              {
                type: "Checklist",
                parameters: {
                  name: "subtasks"
                }
              },
              {
                type: "Dropdown",
                parameters: {
                  name: "status",
                  label: "Current Status",
                  options: getAllColumns(boardColumns),
                  on: statusDropdownOpen,
                  onOpen: onClickInDropdown
                }
              }
            ]
          }
        }}
      />
    </Container>
  )
}



import { Container } from "./style"
import { Form } from '../../../components';

import * as Yup from "yup";
import { useContext, useState } from "react";
import { CurrentBoardContext } from "../../../contexts/components/CurrentBoardContextProvider";

import { IColumn } from "../../../shared/models/IColumn";
import { ISubtask } from "../../../shared/models/ISubtask";

type SubtaskValue = {
  Title: string
}


type Task = {
  title: string;
  description: string | null;
  subtasks: SubtaskValue[];
  status: string;
}

interface ITaskEditProps {
  title: string;
  description: string | null;
  status: string;
  subtasks: ISubtask[]
}

export function TaskEdit({ title, description, subtasks, status }: ITaskEditProps) {
  const [statusDropdownOpen, setStatusDropdownOpen] = useState<boolean>(false)

  const currentBoard = useContext(CurrentBoardContext)
  const boardColumns = currentBoard?.board?.columns ?? []

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
    title: Yup
      .string()
      .required('Can’t be empty'),
    description: Yup
      .string()
      .nullable(),
    subtasks: Yup.array().of(
      Yup.object().shape({
        Title: Yup
          .string()
          .required('Can’t be empty')
      })
    ),
    status: Yup
      .string()
      .required('Can’t be empty')
  })

  return (
    <Container onClick={handleClickInContent}>
      <Form<Task>
        name="Edit Task"
        mode="onSubmit"
        validationSchema={ValidationSchema}
        defaultValues={{
          title,
          description,
          subtasks: subtasks.map((task) => ({ Title: task.title })),
          status: getAllColumns(boardColumns)[0]
        }}
        content={{
          header: {
            components: [
              {
                type: "Title",
                parameters: {
                  children: "Edit Task",
                  title: "Edit Task"
                }
              }
            ]
          },
          main: {
            components: [
              {
                type: "TextField",
                parameters: {
                  name: "title",
                  label: "Title",
                  placeholder: "e.g. Take coffee break",
                  rows: 1
                }
              },
              {
                type: "TextField",
                parameters: {
                  name: "description",
                  label: "Description",
                  placeholder: "e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little.",
                  rows: 4
                }
              },
              {
                type: "ItemsRender",
                parameters: {
                  name: "subtasks",
                  label: "Subtasks",
                  addNewItemButton: {
                    title: "+ Add New Column",
                    "aria-label": "+ Add New Column",
                    children: "+ Add New Column"
                  },
                  newItemSchema: {
                    Title: ""
                  }
                }
              },
              {
                type: "Dropdown",
                parameters: {
                  name: "status",
                  label: "Status",
                  options: getAllColumns(boardColumns),
                  on: statusDropdownOpen,
                  onOpen: onClickInDropdown
                }
              }
            ]
          }
        }}
        submitButton={{
          title: "Save Changes",
          "aria-label": "Save Changes",
          children: "Save Changes"
        }}
      />
    </Container>
  )
}
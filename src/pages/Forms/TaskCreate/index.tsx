


import { Container } from "./style"
import { Form } from '../../../components';

import * as Yup from "yup";
import { useContext, useState } from "react";
import { CurrentBoardContext } from "../../../contexts/components/CurrentBoardContextProvider";

import { IColumn } from "../../../shared/models/IColumn";

type SubtaskValue = {
  Title: string
}

type Task = {
  title: string;
  description: string | null;
  subtasks: SubtaskValue[];
  status: string;
}

export function TaskCreate() {
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
        name="Add New Task"
        mode="onSubmit"
        validationSchema={ValidationSchema}
        defaultValues={{
          title: "",
          description: null,
          subtasks: [],
          status: getAllColumns(boardColumns)[0]
        }}
        content={{
          header: {
            components: [
              {
                type: "Title",
                parameters: {
                  children: "Add New Task",
                  title: "Add New Task"
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
          title: "Create Task",
          "aria-label": "Create Task",
          children: "Create Task"
        }}
      />
    </Container>
  )
}
import { Container } from "./style"
import { Form } from '../../../components';

import * as Yup from "yup";
import { useContext, useState } from "react";
import { CurrentBoardContext } from "../../../contexts/components/CurrentBoardContextProvider";

import { IColumn } from "../../../shared/models/IColumn";

type ColumnValue = {
  Title: string
}

type Board = {
  name: string;
  columns: ColumnValue[];
}

interface IBoardEditProps {
  name: string;
  columns: IColumn[]
}

export function BoardEdit({ name, columns }: IBoardEditProps) {

  const handleClickInContent = (event: any) => {
    event.stopPropagation()
  }

  const ValidationSchema = Yup.object().shape({
    name: Yup
      .string()
      .required('Can’t be empty'),

    columns: Yup.array().of(
      Yup.object().shape({
        Title: Yup
          .string()
          .required('Can’t be empty')
      })
    ),
  })

  return (
    <Container onClick={handleClickInContent}>
      <Form<Board>
        name="Edit Task"
        mode="onSubmit"
        validationSchema={ValidationSchema}
        defaultValues={{
          name,
          columns: columns.map((column) => ({ Title: column.name }))
        }}
        content={{
          header: {
            components: [
              {
                type: "Title",
                parameters: {
                  children: "Edit Board",
                  title: "Edit Board"
                }
              }
            ]
          },
          main: {
            components: [
              {
                type: "TextField",
                parameters: {
                  name: "name",
                  label: "Board Name",
                  placeholder: "e.g. Take coffee break",
                  rows: 1
                }
              },
              {
                type: "ItemsRender",
                parameters: {
                  name: "columns",
                  label: "Board Columns",
                  addNewItemButton: {
                    title: "+ Add New Column",
                    "aria-label": "+ Add New Column",
                    children: "+ Add New Column"
                  },
                  newItemSchema: {
                    Title: ""
                  }
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
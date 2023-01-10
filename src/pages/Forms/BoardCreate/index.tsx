import { Container } from "./style"
import { Form } from '../../../components';

import * as Yup from "yup";

type ColumnValue = {
  Title: string
}

type Board = {
  name: string;
  columns: ColumnValue[];
}

export function BoardCreate() {

  const handleClickInContent = (event: any) => {
    event.stopPropagation()
  }

  const BoardCreateSchema = Yup.object().shape({
    name: Yup.string().nullable().required('Can’t be empty'),
    columns: Yup.array().of(
      Yup.object().shape({
        Title: Yup.string().required('Can’t be empty').nullable()
      })
    )
  })

  return (
    <Container onClick={handleClickInContent}>
      <Form<Board>
        name="Add New Board"
        mode="onSubmit"
        validationSchema={BoardCreateSchema}
        defaultValues={{
          "columns": [
            {
              Title: "Todo"
            },
            {
              Title: "Doing"
            }
          ]
        }}
        content={{
          header: {
            components: [
              {
                type: "Title",
                parameters: {
                  title: "Add New Board",
                  children: "Add New Board"
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
                  rows: 1,
                  placeholder: "e.g. Web Design"
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
          title: "Create New Board",
          "aria-label": "Create New Board",
          children: "Create New Board"
        }}
      />
    </Container>
  )
}
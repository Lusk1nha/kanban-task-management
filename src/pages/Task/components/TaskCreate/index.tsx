import { TextField } from "../../../../components/Inputs/TextField";
import { Container, Header, Title, Form } from "./style";

export function TaskCreate() {

  const handleClickInContent = (event: any) => {
    event.stopPropagation()
  }

  return (
    <Container onClick={handleClickInContent}>
      <Header>
        <Title>Add New Task</Title>
      </Header>

      <Form>
        <TextField name="title" label="Title" type="singleline" placeholder="e.g. Take coffee break" />
        <TextField name="description" label="Description" type="multiline" rows={4} placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little." />
      </Form>
    </Container>
  )
}
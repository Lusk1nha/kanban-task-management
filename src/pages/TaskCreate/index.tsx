import Form from "./components/Form"
import { Container, Header, Title } from "./style"


export function TaskCreate() {

  const handleClickInContent = (event: any) => {
    event.stopPropagation()
  }

  return (
    <Container onClick={handleClickInContent}>
      <Header>
        <Title>Add New Task</Title>
      </Header>
      <Form />
    </Container>
  )
}
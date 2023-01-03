import { Options } from '../../../../components/Buttons/components';
import { Dropdown } from '../../../../components/Dropdown';
import { IButton } from '../../../../shared/models/IButton';
import { IOption } from '../../../../shared/models/IOption';
import { ISubtask } from '../../../../shared/models/ISubtask';
import { SubtaskRender } from '../../../SubtaskRender';
import { Container, Header, Title, Main, Description, SectionName, Wrapper, Footer } from './style';
import { useEffect, useState } from 'react';

const StatusOptions = [
  {
    text: 'Todo',
    value: 'Todo',
  },
  {
    text: 'Doing',
    value: 'Doing',
    isDefaultValue: true
  },
  {
    text: 'Done',
    value: 'Done',
  },
] as IOption[]

const ButtonsOptions = [
  { text: 'Edit Task', title: 'Edit Task', "aria-label": 'Edit Task', type: 'button' },
  { text: 'Delete Task', variant: 'delete', title: 'Delete Task', "aria-label": 'Delete Task', type: 'button' },
] as IButton[]

const subtasksMockup = [
  {
    "title": "Research competitor pricing and business models",
    "isCompleted": true
  },
  {
    "title": "Outline a business model that works for our solution",
    "isCompleted": true
  },
  {
    "title": "Talk to potential customers about our proposed solution and ask for fair price expectancy",
    "isCompleted": false
  }
]

interface TaskProps {
  title: string;
  description: string | null;
  status: string;
  subtasks: ISubtask[]
}

export function TaskView({ title, description, status, subtasks }: TaskProps) {
  const [selectedStatus, setSelectedStatus] = useState<string>(status)

  const completedSubtasks = subtasks.filter(subtask => subtask.isCompleted)
  const defaultStatus = StatusOptions.filter(option => option.value == status)[0]

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Options buttons={ButtonsOptions} />
      </Header>

      <Main>
        <Description>
          {description}
        </Description>

        <Wrapper>
          <SectionName>{`Subtasks (${completedSubtasks?.length} of ${subtasks?.length})`}</SectionName>
          <SubtaskRender subtasks={subtasks} />
        </Wrapper>
      </Main>

      <Footer>
        <SectionName>Current Status</SectionName>
        <Dropdown options={StatusOptions} defaultValue={defaultStatus} onSelect={setSelectedStatus} />
      </Footer>
    </Container>
  )
}
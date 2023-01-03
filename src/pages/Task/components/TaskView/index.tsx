import { Options } from '../../../../components/Buttons/components';
import { Dropdown } from '../../../../components/Dropdown';
import { IButton } from '../../../../shared/models/IButton';
import { IOption } from '../../../../shared/models/IOption';
import { ISubtask } from '../../../../shared/models/ISubtask';
import { SubtaskRender } from '../../../SubtaskRender';
import { Container, Header, Title, Main, Description, SectionName, Wrapper, Footer } from './style';
import { FormEvent, useEffect, useState, useContext } from 'react';
import { CurrentBoardContext } from './../../../../contexts/components/CurrentBoardContextProvider/index';
import { IColumn } from './../../../../shared/models/IColumn';

const StatusOptions = [
  {
    text: 'Todo',
    value: 'Todo',
  },
  {
    text: 'Doing',
    value: 'Doing'
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

interface TaskProps {
  title: string;
  description: string | null;
  status: string;
  subtasks: ISubtask[]
}

export function TaskView({ title, description, status, subtasks }: TaskProps) {
  const [statusDropdownOpen, setStatusDropdownOpen] = useState<boolean>(false)
  const [selectedStatus, setSelectedStatus] = useState<IOption | null>()

  const currentBoard = useContext(CurrentBoardContext)
  const boardColumns = currentBoard?.board?.columns ?? []

  const subtasksLength = subtasks?.length

  const completedSubtasks = subtasks.filter(subtask => subtask.isCompleted)
  const completedSubtasksLength = completedSubtasks?.length

  const currentStatusInOption = {
    text: status,
    value: status
  } as IOption

  useEffect(() => {
    return () => {
      setStatusDropdownOpen(false)
      setSelectedStatus(null)
    }
  }, [title, status])

  const onChangeStatus = (option: IOption): void => {
    setSelectedStatus(option)
  }

  const onClickInDropdown = () => {
    setStatusDropdownOpen(!statusDropdownOpen)
  }

  const handleClickInContent = (event: any) => {
    event.stopPropagation()
  }
  
  const getAllColumns = (columns: IColumn[]): IOption[] => {
    return columns.map((column, id) => {
      return {
        id: id,
        text: column.name,
        value: column.name,
      } as IOption
    })
  }

  console.log(status, currentStatusInOption)

  return (
    <Container onClick={handleClickInContent}>
      <Header>
        <Title>{title}</Title>
        <Options buttons={ButtonsOptions} />
      </Header>

      <Main>
        <Description>{description}</Description>

        <Wrapper>
          <SectionName>{`Subtasks (${completedSubtasksLength} of ${subtasksLength})`}</SectionName>
          <SubtaskRender subtasks={subtasks} />
        </Wrapper>
      </Main>

      <Footer>
        <SectionName>Current Status</SectionName>
        <Dropdown
          on={statusDropdownOpen}
          selectedOption={selectedStatus ?? currentStatusInOption}
          onChange={onChangeStatus}
          onOpen={onClickInDropdown}
          options={getAllColumns(boardColumns)}
        />
      </Footer>
    </Container>
  )
}
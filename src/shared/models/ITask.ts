export interface ITask {
  title: string
  description: string
  status: string
  subtasks: ISubtask[]
}

export interface ISubtask {
  title: string
  isCompleted: boolean
}
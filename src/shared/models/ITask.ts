import { ISubtask } from "./ISubtask"

export interface ITask {
  title: string
  description: string
  status: string
  subtasks: ISubtask[]
}
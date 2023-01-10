import { ISubtask } from './../models/ISubtask';

export interface ITaskModel {
  Title: string;
  Description: string | null;
  Subtasks: ISubtask[];
  Status: string;
}
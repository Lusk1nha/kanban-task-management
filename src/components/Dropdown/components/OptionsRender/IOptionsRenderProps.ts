import { IOption } from '../../../../shared/models/IOption';

export interface IOptionsRenderProps {
  options: IOption[];
  onChange: (args: any) => void;
}
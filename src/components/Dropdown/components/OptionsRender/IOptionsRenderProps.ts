import { IOption } from '../../../../shared/models/IOption';

export interface IOptionsRenderProps {
  options: IOption[];
  setSelected: React.Dispatch<React.SetStateAction<IOption>>;
}
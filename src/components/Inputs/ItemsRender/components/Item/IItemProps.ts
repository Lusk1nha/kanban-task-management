import { UseFieldArrayRemove } from 'react-hook-form';

export interface IItemProps {
  name: unknown;
  item: any;
  index: number;
  remove: UseFieldArrayRemove
}
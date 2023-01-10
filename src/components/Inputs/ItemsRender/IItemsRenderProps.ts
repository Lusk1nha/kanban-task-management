import { IButton } from "../../Form/model/props";

export interface IItemsRenderProps {
  name: string;
  label: string;
  newItemSchema: Object;
  addNewItemButton: IButton;
}
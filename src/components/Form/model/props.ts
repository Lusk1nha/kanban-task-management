import { ButtonProps } from "../../Buttons/models/ButtonProps";
import { OptionsProps } from "../../Buttons/models/OptionsProps";
import { IDropdownProps } from "../../Dropdown/IDropdownProps";
import { IChecklistProps } from "../../Inputs/Checklist/IChecklistProps";
import { IItemsRenderProps } from "../../Inputs/ItemsRender/IItemsRenderProps";
import { ITextFieldProps } from "../../Inputs/TextField/ITextFieldProps";

export interface IButton extends ButtonProps {
  title: string;
  children: string;
}

export interface IContent {
  header: IHeaderProps;
  main: IMainProps;
}

export interface IHeaderProps {
  components: HeaderComponent[];
  disable?: boolean;
}

export interface IMainProps {
  components: MainComponent[];
  disable?: boolean;
}


export type HeaderComponent = {
  type: 'Title',
  parameters: IParametersTitle
} | {
  type: 'Options'
  parameters: IParametersOptions
}

export type MainComponent = {
  type: 'TextField';
  parameters: Omit<ITextFieldProps, "register">;
} | {
  type: 'ItemsRender';
  parameters: IItemsRenderProps;
} | {
  type: 'Dropdown';
  parameters: IDropdownProps
} | {
  type: 'Checklist',
  parameters: IChecklistProps
} | {
  type: 'Custom',
  parameters: IParametersCustom
}

interface IParametersTitle {
  title: string;
  children: string;
}

interface IParametersOptions extends OptionsProps {

}

interface IParametersCustom {
  children: React.ReactNode
}
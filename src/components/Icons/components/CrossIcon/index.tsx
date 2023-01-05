import { IconProps } from "../../models/IconProps";
import { Icon } from "../Icon";

export function CrossIcon(props: IconProps) {
  return (
    <Icon fill={props.iconColor ?? "#828FA3"} x="0" y="0" fillRule="evenodd" enableBackground="new 0 0 15 15" width="15" height="15" xmlSpace="preserve">
      <g fill="#828FA3" fillRule="evenodd"><path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" /><path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" /></g>
    </Icon>
  )
}
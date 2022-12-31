import { IconProps } from "../../models/IconProps";
import { Icon } from "../Icon";

export function ChevronDown(props: IconProps) {
  return (
    <Icon fill={props.iconColor ?? "black"} x="0" y="0" enableBackground="new 0 0 32 32" width="10" height="7" xmlSpace="preserve">
      <path stroke="#635FC7" strokeWidth="2" fill={props.pathColor} d="m1 1 4 4 4-4"/>
    </Icon>
  )
}
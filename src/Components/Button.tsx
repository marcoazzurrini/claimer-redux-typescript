/**@jsx jsx */
import { jsx } from "@emotion/core";
import { IbuttonProps } from "../types";

export default function Button({
  type,
  children,
  onClick,
  style,
  render
}: IbuttonProps) {
  return (
    <button onClick={onClick} css={style} type={type}>
      {render ? render : children}
    </button>
  );
}

Button.defaultProps = {
  type: "text",
  children: undefined,
  onClick: Function,
  style: undefined,
  render: undefined
};

/**@jsx jsx */
import { jsx, SerializedStyles } from "@emotion/core";
interface props {
  type: "button" | "submit" | "reset" | undefined;
  style: SerializedStyles | undefined;
  render: any | null;
  onClick: () => void;
  children: string | undefined;
}
export default function Button({
  type,
  children,
  onClick,
  style,
  render
}: props) {
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

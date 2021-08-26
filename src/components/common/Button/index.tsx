import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { container } from "../../LoginModal/styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  children: ReactNode;
  styleType: "normal" | "register";
}

function Button({
  color = "dark_cyan",
  children,
  styleType = "normal",
  ...props
}: IProps) {
  return (
    <button
      type="button"
      css={container}
      className={`${styleType} ${color}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default memo(Button);

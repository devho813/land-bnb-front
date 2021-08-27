import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { container } from "../../LoginModal/styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  children: ReactNode;
  styleType?: "normal" | "register";
  colorReverse?: boolean;
  icon?: ReactJSXElement;
}

function Button({
  color = "dark_cyan",
  children,
  styleType = "normal",
  colorReverse = false,
  icon,
  ...props
}: IProps) {
  return (
    <button
      type="button"
      css={container}
      className={`${styleType} ${color} ${colorReverse ? "reverse" : ""}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

export default memo(Button);

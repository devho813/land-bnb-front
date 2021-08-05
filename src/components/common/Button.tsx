import { css } from "@emotion/react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import palette from "../../styles/palette";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...props }: IProps) {
  return (
    <button css={container} {...props}>
      {children}
    </button>
  );
}

export default Button;

const container = css`
  width: 100%;
  height: 48px;
  border: 0;
  border-radius: 4px;
  background-color: ${palette.bittersweet};
  color: white;
  font-size: 16px;
  font-weight: 800;
  outline: none;
  cursor: pointer;
`;

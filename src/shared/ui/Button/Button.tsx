import { ButtonHTMLAttributes } from "react";
import * as styles from "./Button.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  theme?: ButtonTheme;
}

export const Button: React.FC<Props> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      className={classNames(styles.Button, {}, [className, styles[theme]])}
    >
      {children}
    </button>
  );
};

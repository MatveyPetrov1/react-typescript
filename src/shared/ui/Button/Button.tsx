import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  theme?: ButtonTheme;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classNames(styles.button, {}, [className, styles[theme]])}
    >
      {children}
    </button>
  );
};

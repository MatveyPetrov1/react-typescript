import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  L = "sizeL",
  M = "sizeM",
  XL = "sizeXl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square = false,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classNames(styles.button, { [styles.square]: square }, [
        className,
        styles[theme],
        styles[size],
      ])}
    >
      {children}
    </button>
  );
};

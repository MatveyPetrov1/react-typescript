import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  OUTLINE_INVERTED = "outlineInverted",
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
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square = false,
    size = ButtonSize.M,
    disabled = false,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classNames(
        styles.button,
        { [styles.square]: square, [styles.disabled]: disabled },
        [className, styles[theme], styles[size]]
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

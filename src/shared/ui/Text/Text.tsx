import { memo } from "react";
import styles from "./Text.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextAling {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAling;
}

export const Text: React.FC<TextProps> = memo((props: TextProps) => {
  const { className, title, text, theme = "primary", align = "left" } = props;

  return (
    <div
      className={classNames(styles.textWrapper, {}, [
        className,
        styles[theme],
        styles[align],
      ])}
    >
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});

import styles from "./Text.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: React.FC<TextProps> = (props: TextProps) => {
  const { className, title, text, theme = "primary" } = props;

  return (
    <div
      className={classNames(styles.textWrapper, {}, [className, styles[theme]])}
    >
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

import React from "react";
import styles from "./Code.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "../Button/Button";
import { CopyIcon } from "@/shared/assets/icons";

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: React.FC<CodeProps> = (props: CodeProps) => {
  const { className, text } = props;

  const onCopy = React.useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(styles.code, {}, [className])}>
      <Button
        onClick={onCopy}
        className={styles.button}
        theme={ButtonTheme.CLEAR}
      >
        <CopyIcon className={styles.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
};

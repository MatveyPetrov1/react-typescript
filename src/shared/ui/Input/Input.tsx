import React, { ReactEventHandler } from "react";
import { InputHTMLAttributes, memo } from "react";
import styles from "./Input.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum InputColor {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  color?: string;
  autoFocus?: boolean;
}

export const Input: React.FC<InputProps> = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    color = "primary",
    autoFocus = false,
    ...otherProps
  } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [caretPosition, setCaretPosition] = React.useState<number>(0);

  React.useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onSelect = (e: ReactEventHandler<HTMLInputElement>) => {
    //@ts-expect-error 123
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(styles.inputWrapper, {}, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={styles.caretWrapper}>
        <input
          ref={inputRef}
          className={classNames(styles.input, {}, [styles[color]])}
          value={value}
          type={type}
          onChange={onChangeHandler}
          onBlur={onBlur}
          onFocus={onFocus}
          //@ts-expect-error 123
          onSelect={onSelect}
          name="input"
          {...otherProps}
        />
        {isFocused && (
          <span
            className={classNames(styles.caret, {}, [styles[color]])}
            style={{ left: `${caretPosition * 7.5}px` }}
          ></span>
        )}
      </div>
    </div>
  );
});

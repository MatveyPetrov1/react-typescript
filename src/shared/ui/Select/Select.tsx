import React, { ChangeEvent } from "react";
import styles from "./Select.module.scss";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: React.FC<SelectProps> = React.memo(
  (props: SelectProps) => {
    const { className, label, options, value, onChange, readonly } = props;

    const onChangeHander = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    const optionList = React.useMemo(() => {
      return options.map((option) => (
        <option
          key={option.value}
          className={styles.option}
          value={option.value}
        >
          {option.content}
        </option>
      ));
    }, [options]);

    const mods: Mods = {};

    return (
      <div className={classNames(styles.wrapper, mods, [className])}>
        {label && <span className={styles.label}>{`${label}>`}</span>}
        <select
          onChange={onChangeHander}
          value={value}
          className={styles.select}
          disabled={readonly}
        >
          {optionList}
        </select>
      </div>
    );
  },
);

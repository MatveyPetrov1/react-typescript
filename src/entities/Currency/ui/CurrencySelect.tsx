import { Select } from "@/shared/ui/Select/Select";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Currencies } from "../model/types/currency";
import React from "react";

interface CurrencySelectProps {
  className?: string;
  value?: Currencies;
  onChange?: (value: Currencies) => void;
  readonly?: boolean;
}

export const CurrencySelect: React.FC<CurrencySelectProps> = React.memo(
  (props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;

    const options = [
      { value: Currencies.RUB, content: Currencies.RUB },
      { value: Currencies.EUR, content: Currencies.EUR },
      { value: Currencies.USD, content: Currencies.USD },
    ];

    const onChangeHander = React.useCallback(
      (value: string) => {
        onChange?.(value as Currencies);
      },
      [onChange],
    );

    return (
      <Select
        className={classNames("", {}, [className])}
        label="Укажите валюту"
        options={options}
        value={value}
        onChange={onChangeHander}
        readonly={readonly}
      />
    );
  },
);

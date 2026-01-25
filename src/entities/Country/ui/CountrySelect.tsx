import { classNames } from "@/shared/lib/classNames/classNames";
import { Select } from "@/shared/ui/Select/Select";
import { Country } from "../model/types/country";
import React from "react";

interface CountrySelect {
  className?: string;
  value?: string;
  onChange?: (country: Country) => void;
  readonly?: boolean;
}

export const CountrySelect: React.FC<CountrySelect> = React.memo(
  (props: CountrySelect) => {
    const { className, value, onChange, readonly } = props;

    const options = React.useMemo(() => {
      return [
        { value: Country.Armenia, content: Country.Armenia },
        { value: Country.Belarus, content: Country.Belarus },
        { value: Country.Kazakhstan, content: Country.Kazakhstan },
        { value: Country.Russia, content: Country.Russia },
        { value: Country.Ukraine, content: Country.Ukraine },
      ];
    }, []);

    const onChangeHandler = React.useCallback(
      (country: Country) => {
        onChange?.(country as Country);
      },
      [onChange],
    );

    return (
      <Select
        className={classNames("", {}, [className])}
        value={value}
        onChange={onChangeHandler}
        options={options}
        readonly={readonly}
        label="Укажите страну"
      />
    );
  },
);

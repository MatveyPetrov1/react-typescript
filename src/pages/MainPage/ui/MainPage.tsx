import React from "react";
import { Counter } from "@/entities/Counter";
import { Input } from "@/shared/ui/Input/Input";

const MainPage = () => {
  const [value, setValue] = React.useState<string>("");

  const onChangeValue = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      {/* <BugButton /> */}
      <Counter />
      Главная страница
      <Input
        onChange={onChangeValue}
        value={value}
        placeholder="Введите текст"
      />
    </div>
  );
};

export default MainPage;

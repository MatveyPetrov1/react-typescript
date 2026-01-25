// mods - объект, у которого как ключ идет название класса, а как значение какой-то boolean флаг
// Record: специальный тайпскриптовый тип, который обозначает, что в качестве ключа, в данном случае, будет использваться string, а в качестве значения boolean или string
// additional - массив каких-то дополнительных классов, в него можно передать что угодно, например, класс withPaddings и т.д.
// Пример: classNames("remove-btn", {hovered: true, selectable: true, red: false}, ["pdg"])
// Результат: "remove-btn hovered selectable pdg"

export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string {
  const classNameString = [
    cls,
    ...additional.filter(Boolean),
    // 1. Собираем "массив из массивов" с помощью метода entries класса Object
    // 2. Фильтруем, оставляя только те "массивы", у которых правдивое value
    // 3. Оставляем только ключи при помощи map
    // 4. Разворачиваем наш получившийся массив в основной массив
    ...Object.entries(mods)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([key, value]) => Boolean(value))
      .map(([key]) => key),
  ].join(" ");

  if (classNameString[0] === " ") {
    return classNameString.slice(1);
  }

  return classNameString;
}

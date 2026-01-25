import styles from "./ThemeSwitcher.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme, AppTheme } from "@/app/providers/ThemeProvider";
import { DarkThemeIcon, LightThemeIcon } from "@/shared/assets/icons";
import { Button } from "@/shared/ui/Button/Button";
import { getClassShortName } from "@/shared/lib/classNames/getClassShortName";
import { memo } from "react";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC = memo((props: ThemeSwitcherProps) => {
  const { className } = props;
  const { toggleTheme, theme } = useTheme();

  const { currentTheme } = getClassShortName(theme);

  return (
    <Button
      className={classNames(styles.themeSwitcher, {}, [
        className,
        styles[currentTheme],
      ])}
      type="button"
      onClick={toggleTheme}
    >
      {theme === AppTheme.LIGHT ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
});

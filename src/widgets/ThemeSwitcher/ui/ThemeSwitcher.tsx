import styles from "./ThemeSwitcher.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme, AppTheme } from "@/app/providers/ThemeProvider";
import { DarkThemeIcon, LightThemeIcon } from "@/shared/assets/icons";
import { Button } from "@/shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      className={classNames(styles.themeSwitcher, {}, [
        className,
        styles[theme],
      ])}
      type="button"
      onClick={toggleTheme}
    >
      {theme === AppTheme.LIGHT ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};

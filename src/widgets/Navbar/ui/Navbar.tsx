import * as styles from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={styles.mainLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to="/about">
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

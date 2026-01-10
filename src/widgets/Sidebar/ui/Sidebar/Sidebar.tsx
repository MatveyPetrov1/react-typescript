import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import styles from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import React from "react";
import { RoutePath } from "@/shared/config/route/routeConfig";
import { AboutIcon, MainIcon } from "@/shared/assets/icons";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const { className } = props;

  const onToggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-button"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        type="button"
        onClick={onToggleSidebar}
        className={styles.collapsedBtn}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={styles.items}>
        <AppLink
          className={styles.item}
          theme={AppLinkTheme.INVERTED}
          to={RoutePath.main}
        >
          <MainIcon className={styles.icon} />
          <span className={styles.link}>Главная</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.INVERTED}
          to={RoutePath.about}
          className={styles.item}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>О сайте</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

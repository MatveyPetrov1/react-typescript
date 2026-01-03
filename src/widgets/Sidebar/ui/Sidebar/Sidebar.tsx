import styles from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import React from "react";

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
        theme={ButtonTheme.OUTLINE}
        type="button"
        onClick={onToggleSidebar}
      >
        toggle
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

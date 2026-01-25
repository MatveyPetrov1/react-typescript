import styles from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import React, { memo } from "react";
import { SidebarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC = memo((props: SidebarProps) => {
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
        {SidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
});

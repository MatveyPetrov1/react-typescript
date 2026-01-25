import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import styles from "./SidebarItem.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { SidebarItemType } from "../../model/items";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";

interface SidebarProps {
  className?: string;
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: React.FC<SidebarProps> = memo(
  (props: SidebarProps) => {
    const { className, item, collapsed } = props;

    const isAuth = useSelector(getUserAuthData);

    if (!isAuth && item.authOnly) {
      return null;
    }

    return (
      <AppLink
        className={classNames(
          styles.sidebarItem,
          { [styles.collapsed]: collapsed },
          [className],
        )}
        theme={AppLinkTheme.INVERTED}
        to={item.path}
      >
        <item.Icon className={styles.icon} />
        <span className={styles.link}>{item.text}</span>
      </AppLink>
    );
  },
);

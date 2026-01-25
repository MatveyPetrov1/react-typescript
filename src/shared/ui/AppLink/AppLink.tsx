import { Link, LinkProps } from "react-router-dom";
import styles from "./AppLink.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = memo((props: AppLinkProps) => {
  const { className, children, theme = "primary", ...otherProps } = props;

  return (
    <Link
      className={classNames(styles.appLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});

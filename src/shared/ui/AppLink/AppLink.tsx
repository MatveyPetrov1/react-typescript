import { Link, LinkProps } from "react-router-dom";
import * as styles from "./AppLink.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

interface Props extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<Props> = (props) => {
  const { className, children, theme = "primary", ...otherProps } = props;

  return (
    <Link
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

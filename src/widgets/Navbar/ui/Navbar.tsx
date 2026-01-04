import styles from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC = ({ className }: NavbarProps) => {
  return <div className={classNames(styles.navbar, {}, [className])}></div>;
};

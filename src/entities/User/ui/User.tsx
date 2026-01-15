import styles from "./User.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface Props {
  className?: string;
}

export const User: React.FC = (props: Props) => {
  const { className } = props;

  return <div className={classNames(styles.user, {}, [className])}></div>;
};

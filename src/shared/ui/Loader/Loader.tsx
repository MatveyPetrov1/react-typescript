import { classNames } from "@/shared/lib/classNames/classNames";
import * as styles from "./Loader.module.scss";

export interface LoaderProps {
  className?: string;
}

export const Loader: React.FC = (props: LoaderProps) => {
  const { className } = props;

  return (
    <div className={classNames(`${styles.ldsRoller}`, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

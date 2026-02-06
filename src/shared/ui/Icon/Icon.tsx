import styles from "./Icon.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface IconProps {
  className?: string;
  //eslint-disable-next-line
  Svg?: any;
}

export const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { className, Svg } = props;

  return <Svg className={classNames(styles.icon, {}, [className])} />;
};

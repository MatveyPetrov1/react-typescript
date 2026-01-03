import { Loader } from "@/shared/ui/Loader/Loader";
import styles from "./PageLoader.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface Props {
  className?: string;
}

export const PageLoader: React.FC = (props: Props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};

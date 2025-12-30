import styles from "./NotFoundPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface Props {
  className?: string;
}

export const NotFoundPage: React.FC = (props: Props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      Страница не найдена
    </div>
  );
};

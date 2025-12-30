import { Button } from "@/shared/ui/Button/Button";
import styles from "./PageError.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface Props {
  className?: string;
}

export const PageError: React.FC = (props: Props) => {
  const { className } = props;

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p>Произошла непредвиденная ошибка</p>
      <Button onClick={reloadPage}>Обновить страницу</Button>
    </div>
  );
};

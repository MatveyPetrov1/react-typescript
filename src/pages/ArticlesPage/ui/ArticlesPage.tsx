import React from "react";
import styles from "./ArticlesPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface Props {
  className?: string;
}

const ArticlesPage: React.FC = (props: Props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.articles, {}, [className])}>
      articles page
    </div>
  );
};

export default React.memo(ArticlesPage);

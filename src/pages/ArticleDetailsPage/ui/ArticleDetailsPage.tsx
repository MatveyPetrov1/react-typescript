import React from "react";
import styles from "./ArticleDetailsPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleDetails } from "@/entities/Article";
import { useParams } from "react-router-dom";

interface Props {
  className?: string;
}

const ArticleDetailsPage: React.FC = (props: Props) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(styles.articleDetails, {}, [className])}>
        Статья не найдена
      </div>
    );
  }

  return (
    <div className={classNames(styles.articleDetails, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default React.memo(ArticleDetailsPage);

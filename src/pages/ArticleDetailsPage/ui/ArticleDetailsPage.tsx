import React from "react";
import styles from "./ArticleDetailsPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface Props {
  className?: string;
}

const ArticleDetailsPage: React.FC = (props: Props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.articleDetails, {}, [className])}>
      article details page
    </div>
  );
};

export default React.memo(ArticleDetailsPage);

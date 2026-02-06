import styles from "./ArticleImageBlockComponent.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import React from "react";
import { ArticleImageBlock } from "../../model/types/article";
import { Text, TextAling } from "@/shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> =
  React.memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(styles.articleImageBlockComponent, {}, [
          className,
        ])}
      >
        <img alt={block.title} src={block.src} className={styles.img} />
        {block.title && <Text title={block.title} align={TextAling.CENTER} />}
      </div>
    );
  });

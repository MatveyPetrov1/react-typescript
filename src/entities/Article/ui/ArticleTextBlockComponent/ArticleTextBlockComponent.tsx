import React from "react";
import styles from "./ArticleTextBlockComponent.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleTextBlock } from "../../model/types/article";
import { Text } from "@/shared/ui/Text/Text";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> =
  React.memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(styles.articleTextBlockComponent, {}, [
          className,
        ])}
      >
        {block.title && <Text title={block.title} className={styles.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text key={paragraph} text={paragraph} className={styles.paragraph} />
        ))}
      </div>
    );
  });

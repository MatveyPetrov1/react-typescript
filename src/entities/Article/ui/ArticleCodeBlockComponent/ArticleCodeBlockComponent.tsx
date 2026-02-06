import React from "react";
import styles from "./ArticleCodeBlockComponent.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Code } from "@/shared/ui/Code/Code";
import { ArticleCodeBlock } from "../../model/types/article";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> =
  React.memo((props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
      <Code
        className={classNames(styles.articleCodeBlockComponent, {}, [
          className,
        ])}
        text={block.code}
      ></Code>
    );
  });

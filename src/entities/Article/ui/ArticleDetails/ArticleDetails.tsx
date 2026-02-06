import {
  DynamicModuleLoader,
  ReducerList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import styles from "./ArticleDetails.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import articleReducer from "../../model/slice/articleDetailsSlice";
import React from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArtcileById";
import { useSelector } from "react-redux";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { Text, TextAling, TextSize } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import EyeIcon from "@/shared/assets/icons/eye-icon.svg";
import CalendarIcon from "@/shared/assets/icons/calendar-icon.svg";
import { Icon } from "@/shared/ui/Icon/Icon";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducerList = {
  articleDetails: articleReducer,
};

export const ArticleDetails: React.FC<ArticleDetailsProps> = React.memo(
  (props: ArticleDetailsProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();

    React.useEffect(() => {
      if (__PROJECT__ !== "storybook") {
        dispatch(fetchArticleById(id));
      }
    }, [dispatch, id]);

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = React.useCallback((block: ArticleBlock) => {
      if (block.type === ArticleBlockType.CODE) {
        return (
          <ArticleCodeBlockComponent className={styles.block} block={block} />
        );
      } else if (block.type === ArticleBlockType.IMAGE) {
        return (
          <ArticleImageBlockComponent block={block} className={styles.block} />
        );
      }
      return (
        <ArticleTextBlockComponent block={block} className={styles.block} />
      );
    }, []);

    let content;

    if (isLoading) {
      content = (
        <>
          <Skeleton
            width={200}
            height={200}
            border="50%"
            className={styles.avatar}
          />
          <Skeleton width={300} height={32} className={styles.title} />
          <Skeleton width={600} height={24} className={styles.skeletonItem} />
          <Skeleton
            width={"100%"}
            height={200}
            className={styles.skeletonItem}
          />
          <Skeleton
            width={"100%"}
            height={200}
            className={styles.skeletonItem}
          />
        </>
      );
    } else if (error) {
      content = (
        <Text
          title={"Произошла ошибка при загрузке статьи"}
          align={TextAling.CENTER}
        />
      );
    } else {
      content = (
        <>
          <div className={styles.avatarWrapper}>
            <Avatar size={200} src={article?.image} className={styles.avatar} />
          </div>
          <Text
            className={styles.title}
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
          />
          <div className={styles.articleInfo}>
            <Icon className={styles.icon} Svg={EyeIcon} />
            <Text text={String(article?.views)} />
          </div>
          <div className={styles.articleInfo}>
            <Icon className={styles.icon} Svg={CalendarIcon} />
            <Text text={article?.createdAt} />
          </div>
          {article?.blocks.map(renderBlock)}
        </>
      );
    }

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
        <div className={classNames(styles.articleDetails, {}, [className])}>
          {content}
        </div>
      </DynamicModuleLoader>
    );
  },
);

import styles from "./Skeleton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import React, { CSSProperties } from "react";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton: React.FC<SkeletonProps> = React.memo(
  (props: SkeletonProps) => {
    const { className, height, width, border } = props;

    const style: CSSProperties = {
      width,
      height,
      borderRadius: border,
    };

    return (
      <div
        style={style}
        className={classNames(styles.skeleton, {}, [className])}
      ></div>
    );
  },
);

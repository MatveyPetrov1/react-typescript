import React, { CSSProperties } from "react";
import styles from "./Avatar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const { className, src, size, alt, ...otherProps } = props;

  const style = React.useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  return (
    <img
      className={classNames(styles.avatar, {}, [className])}
      src={src}
      style={style}
      alt={alt}
      {...otherProps}
    />
  );
};

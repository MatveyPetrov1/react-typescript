import styles from "./ProfilePageHeader.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text/Text";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from "@/entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = (
  props: ProfilePageHeaderProps,
) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const readOnly = useSelector(getProfileReadOnly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onUpdate = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.profilePageHeader, {}, [className])}>
      <Text title="Профиль" />
      {readOnly ? (
        <Button
          theme={ButtonTheme.OUTLINE}
          className={styles.editBtn}
          onClick={onEdit}
        >
          Редактировать
        </Button>
      ) : (
        <div className={styles.editBtns}>
          <Button
            theme={ButtonTheme.OUTLINE}
            className={styles.editBtn}
            onClick={onUpdate}
          >
            Сохранить
          </Button>
          <Button
            theme={ButtonTheme.OUTLINE_RED}
            className={styles.saveBtn}
            onClick={onCancelEdit}
          >
            Отменить
          </Button>
        </div>
      )}
    </div>
  );
};

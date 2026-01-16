import React from "react";
import styles from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "@/entities/User";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = React.useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = React.useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = React.useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={styles.links}
          onClick={onLogout}
        >
          Выйти
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={onShowModal}
      >
        Войти
      </Button>

      <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
    </div>
  );
};

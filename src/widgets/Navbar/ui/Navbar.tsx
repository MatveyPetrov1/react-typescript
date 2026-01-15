import React from "react";
import styles from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { LoginModal } from "@/features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = React.useState<boolean>(false);

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = React.useCallback(() => {
    setIsAuthModal(true);
  }, []);

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

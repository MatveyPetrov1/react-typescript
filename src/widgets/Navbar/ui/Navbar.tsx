import React from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import styles from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = React.useState<boolean>(false);

  const onToggleModal = React.useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={onToggleModal}
      >
        Войти
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsa
        accusantium fugit quasi deserunt officiis distinctio nobis eveniet, eius
        repudiandae! Ratione officia cupiditate eos? Sunt suscipit perspiciatis
        nam eum aperiam?
      </Modal>
    </div>
  );
};

import { Modal } from "@/shared/ui/Modal/Modal";
import { classNames } from "@/shared/lib/classNames/classNames";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = (
  props: LoginModalProps
) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames("", {}, [className])}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};

import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./LoginForm.module.scss";
import { Input, InputColor } from "@/shared/ui/Input/Input";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC = (props: LoginFormProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Input
        color={InputColor.INVERTED}
        type="text"
        className={styles.loginInput}
        placeholder="Введите логин"
        autoFocus={true}
      />
      <Input
        color={InputColor.INVERTED}
        type="text"
        className={styles.loginInput}
        placeholder="Введите пароль"
      />
      <Button
        className={styles.loginButton}
        theme={ButtonTheme.OUTLINE_INVERTED}
        size={ButtonSize.M}
      >
        Войти
      </Button>
    </div>
  );
};

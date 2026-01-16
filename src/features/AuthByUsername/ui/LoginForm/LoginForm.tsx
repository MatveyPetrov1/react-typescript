import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./LoginForm.module.scss";
import { Input, InputColor } from "@/shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "@/shared/ui/Text/Text";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC = React.memo((props: LoginFormProps) => {
  const { className } = props;

  const dispatch = useDispatch();

  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = React.useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch],
  );

  const onChangePassword = React.useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = React.useCallback(() => {
    //@ts-expect-error 123
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.loginForm, {}, [className])}>
      <Text title="Форма авторизации" />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        color={InputColor.INVERTED}
        type="text"
        className={styles.loginInput}
        placeholder="Введите логин"
        autoFocus={true}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        color={InputColor.INVERTED}
        type="text"
        className={styles.loginInput}
        placeholder="Введите пароль"
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={styles.loginButton}
        theme={ButtonTheme.OUTLINE_INVERTED}
        size={ButtonSize.M}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        Войти
      </Button>
    </div>
  );
});

import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./LoginForm.module.scss";
import { Input, InputColor } from "@/shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import LoginReducer from "../../model/slice/loginSlice";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import {
  DynamicModuleLoader,
  ReducerList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducerList = {
  loginForm: LoginReducer,
};

const LoginForm: React.FC = React.memo((props: LoginFormProps) => {
  const { className } = props;

  const dispatch = useDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

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
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;

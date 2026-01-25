import styles from "./ProfileCard.module.scss";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { Text, TextAling, TextTheme } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { ProfileType } from "../model/types/profile";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Currencies, CurrencySelect } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { CountrySelect } from "@/entities/Country";

interface ProfileCardProps {
  className?: string;
  data?: ProfileType;
  isLoading?: boolean;
  error?: string;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value?: Currencies) => void;
  onChangeCountry?: (value?: Country) => void;
  readonly?: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = (
  props: ProfileCardProps,
) => {
  const {
    className,
    data,
    isLoading,
    error,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
    readonly = false,
  } = props;

  if (isLoading) {
    return (
      <div
        className={classNames(styles.profileCard, {}, [
          className,
          styles.loading,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(styles.profileCard, {}, [
          className,
          styles.error,
        ])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={"Произошла ошибка при загрузке пользователя"}
          text={"Попробуйте обновить страницу"}
          align={TextAling.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readonly,
  };

  return (
    <div className={classNames(styles.profileCard, mods, [className])}>
      <div className={styles.data}>
        <div className={styles.avatarWrapper}>
          {data?.avatar && (
            <Avatar src={data?.avatar} alt="avatar" size={100} />
          )}
        </div>

        <Input
          value={data?.firstname}
          placeholder="Ваше имя"
          className={styles.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder="Ваша фамилия"
          className={styles.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          value={String(data?.age)}
          placeholder="Ваш возраст"
          className={styles.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder="Ваша город"
          className={styles.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder="Ваше имя пользователя"
          className={styles.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder="Ваш аватар"
          className={styles.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
          className={styles.input}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
          className={styles.input}
        />
      </div>
    </div>
  );
};

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import styles from "./ProfilePage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  fetchProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadOnly,
  ProfileCard,
} from "@/entities/Profile";
import React from "react";
import {
  DynamicModuleLoader,
  ReducerList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import profileReducer, {
  profileActions,
} from "../../../entities/Profile/model/slice/profileSlice";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { getProfileForm } from "@/entities/Profile/model/selectors/getProfileForm/getProfileForm";
import { Currencies } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { getProfileValidateErrors } from "@/entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { TextTheme } from "@/shared/ui/Text/Text";
import { Text } from "@/shared/ui/Text/Text";

export interface ProfilePageProps {
  className?: string;
}

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: React.FC = (props: ProfilePageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErrors);

  React.useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = React.useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || "" }));
    },
    [dispatch],
  );

  const onChangeLastname = React.useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch],
  );

  const onChangeCity = React.useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch],
  );

  const onChangeAge = React.useCallback(
    (value?: string) => {
      const number = Number(value);
      if (!isNaN(number)) {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
      }
    },
    [dispatch],
  );

  const onChangeUsername = React.useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch],
  );

  const onChangeAvatar = React.useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch],
  );

  const onChangeCurrency = React.useCallback(
    (currency?: Currencies) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = React.useCallback(
    (country?: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.profilePage, {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length > 0 &&
          validateErrors.map((error, index) => (
            <Text key={index} theme={TextTheme.ERROR} text={error} />
          ))}
        <ProfileCard
          data={form}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

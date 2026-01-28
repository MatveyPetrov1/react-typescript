import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { ProfileType } from "@/entities/Profile";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { ValidateProfileError } from "../../types/profile";

export const updateProfileData = createAsyncThunk<
  ProfileType,
  void,
  ThunkConfig<ValidateProfileError[]>
>(
  "profile/updateProfileData",

  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.put<ProfileType>("/profile", formData);

      const errors = validateProfileData(response.data);

      if (errors.length > 0) {
        return rejectWithValue(errors);
      }

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);

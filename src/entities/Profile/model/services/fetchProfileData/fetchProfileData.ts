import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { ProfileType } from "@/entities/Profile";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfileData = createAsyncThunk<
  ProfileType,
  void,
  ThunkConfig<string>
>(
  "profile/fetchProfileData",

  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<ProfileType>("/profile");

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue("error");
    }
  },
);

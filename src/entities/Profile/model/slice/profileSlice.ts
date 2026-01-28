import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ProfileType,
  ProfileSchema,
  ValidateProfileError,
} from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: true,
  validateErrors: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<ProfileType>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    edit: (state) => {
      state.readonly = true;
      state.data = state.form;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
      state.validateErrors = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<ProfileType>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      },
    );
    builder.addCase(
      fetchProfileData.rejected,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    );
    builder.addCase(updateProfileData.pending, (state) => {
      state.isLoading = true;
      state.validateErrors = undefined;
    });
    builder.addCase(
      updateProfileData.fulfilled,
      (state, action: PayloadAction<ProfileType>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
      },
    );
    builder.addCase(
      updateProfileData.rejected,
      (state, action: PayloadAction<ValidateProfileError[]>) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      },
    );
  },
});

export const { actions: profileActions } = profileSlice;
export default profileSlice.reducer;

import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { DeepPartial } from "@/app/providers/StoreProvider";
import { ReducersMapObject } from "@reduxjs/toolkit";
import LoginReducer from "@/features/AuthByUsername/model/slice/loginSlice";
import profileReducer from "../../../../entities/Profile/model/slice/profileSlice";
import { ReducerList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducerList = {
  loginForm: LoginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
  ) =>
  //eslint-disable-next-line
  (StoryComponent: any) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };

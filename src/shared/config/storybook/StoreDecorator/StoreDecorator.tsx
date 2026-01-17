import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
//@ts-expect-error 123
import { Story } from "@storybook/react-webpack5";
//@ts-expect-error 123
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import LoginReducer from "@/features/AuthByUsername/model/slice/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: LoginReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
  ) =>
  (StoryComponent: Story) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };

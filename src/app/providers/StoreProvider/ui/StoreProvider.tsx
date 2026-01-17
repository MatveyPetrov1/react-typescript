import React from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../";
import { ReducersMapObject } from "@reduxjs/toolkit";
//@ts-expect-error 123
import { DeepPartial } from "@reduxjs/toolkit";

interface StoreProviderProps {
  children?: React.ReactNode;
  initialState?: StateSchema;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: React.FC<StoreProviderProps> = (
  props: StoreProviderProps,
) => {
  const { initialState, children, asyncReducers } = props;

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  return <Provider store={store}>{children}</Provider>;
};

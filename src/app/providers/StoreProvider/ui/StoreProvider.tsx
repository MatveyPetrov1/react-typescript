import React from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../";

interface StoreProviderProps {
  children?: React.ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider: React.FC<StoreProviderProps> = (
  props: StoreProviderProps
) => {
  const { initialState, children } = props;

  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};

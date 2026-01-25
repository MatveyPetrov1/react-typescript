import { ReduxStoreWithManager } from "@/app/providers/StoreProvider";
import React from "react";
import { useStore } from "react-redux";
import { StateSchemaKey } from "@/app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../hooks/useAppDispatch/useAppDispatch";

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoader {
  children: React.ReactNode;
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoader> = (
  props: DynamicModuleLoader,
) => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const dispatch = useAppDispatch();

  const store = useStore() as ReduxStoreWithManager;

  React.useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    //eslint-disable-next-line
  }, []);

  return <>{children}</>;
};

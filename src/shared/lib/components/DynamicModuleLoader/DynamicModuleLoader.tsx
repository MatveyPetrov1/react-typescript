import { ReduxStoreWithManager } from "@/app/providers/StoreProvider";
import React from "react";
import { useDispatch, useStore } from "react-redux";
import { StateSchemaKey } from "@/app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoader {
  children: React.ReactNode;
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoader> = (
  props: DynamicModuleLoader,
) => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const dispatch = useDispatch();

  const store = useStore() as ReduxStoreWithManager;

  React.useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          //eslint-disable-next-line
          ([name, reducer]: ReducerListEntry) => {
            store.reducerManager.remove(name);
            dispatch({ type: `@DESTROY ${name} reducer` });
          },
        );
      }
    };
    //eslint-disable-next-line
  }, []);

  return <>{children}</>;
};

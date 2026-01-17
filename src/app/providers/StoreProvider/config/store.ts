import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { CounterReducer } from "@/entities/Counter";
import { UserReducer } from "@/entities/User";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: CounterReducer,
    user: UserReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
  });

  //@ts-expect-error 123
  store.reducerManager = reducerManager;

  return store;
}

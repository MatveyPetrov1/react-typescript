import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { CounterReducer } from "@/entities/Counter";

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: CounterReducer,
    },
    preloadedState: initialState,
  });
}

import { StateSchema } from "@/app/providers/StoreProvider";
import { getCounter } from "./getCounter";
//@ts-expect-error 123
import { DeepPartial } from "@reduxjs/toolkit";

describe("Get Counter Test", () => {
  test("should return counter", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});

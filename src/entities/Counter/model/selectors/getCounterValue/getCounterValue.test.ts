import { StateSchema } from "@/app/providers/StoreProvider";
//@ts-expect-error 123
import { DeepPartial } from "@reduxjs/toolkit";
import { getCounterValue } from "./getCounterValue";

describe("getCounterTest", () => {
  test("should return counter", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state)).toEqual(10);
  });
});

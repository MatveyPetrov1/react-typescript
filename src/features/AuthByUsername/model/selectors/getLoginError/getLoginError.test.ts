import { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";
import { DeepPartial } from "@/app/providers/StoreProvider";

describe("error test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: "error",
      },
    };

    expect(getLoginError).toEqual(state);
  });
});

import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfileReadOnly = (state: StateSchema) => {
  return state.profile?.readonly;
};

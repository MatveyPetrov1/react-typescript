import React from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFormAsync: React.FC<LoginFormProps> = React.lazy(
  () =>
    //@ts-expect-error 123
    import("./LoginForm.tsx") as unknown as Promise<{
      default: React.ComponentType<unknown>;
    }>,
);

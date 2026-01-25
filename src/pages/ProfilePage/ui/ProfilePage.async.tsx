import React from "react";
import { ProfilePageProps } from "./ProfilePage";

export const ProfilePageAsync: React.FC<ProfilePageProps> = React.lazy(
  () =>
    import("./ProfilePage.tsx") as unknown as Promise<{
      default: React.ComponentType<unknown>;
    }>,
);

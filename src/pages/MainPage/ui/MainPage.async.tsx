// Компонент для подгрузки страницы только при необходимости

import React from "react";

export const MainPageAsync = React.lazy(
  () =>
    //@ts-expect-error123
    import("./MainPage.tsx") as unknown as Promise<{
      default: React.ComponentType<unknown>;
    }>,
);

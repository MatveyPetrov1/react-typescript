// Компонент для подгрузки страницы только при необходимости

import React from "react";

export const ArticlesPageAsync = React.lazy(
  () =>
    //@ts-expect-error 123
    import("./ArticlesPage.tsx") as unknown as Promise<{
      default: React.ComponentType<unknown>;
    }>,
);

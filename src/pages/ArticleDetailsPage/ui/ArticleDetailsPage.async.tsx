// Компонент для подгрузки страницы только при необходимости

import React from "react";

export const ArticleDetailsPageAsync = React.lazy(
  () =>
    //@ts-expect-error 123
    import("./ArticleDetailsPage.tsx") as unknown as Promise<{
      default: React.ComponentType<unknown>;
    }>,
);

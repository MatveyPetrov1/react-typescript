// Компонент для подгрузки страницы только при необходимости

import React from "react";

export const AboutPageAsync = React.lazy(
  () =>
    //@ts-expect-error123
    import("./AboutPage.tsx") as unknown as Promise<{
      default: React.ComponentType<unknown>;
    }>,
);

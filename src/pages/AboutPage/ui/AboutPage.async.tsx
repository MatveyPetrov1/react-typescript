// Компонент для подгрузки страницы только при необходимости

import React from "react";

export const AboutPageAsync = React.lazy(() => import("./AboutPage"));

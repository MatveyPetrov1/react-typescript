// Компонент для подгрузки страницы только при необходимости

import React from "react";

export const MainPageAsync = React.lazy(() => import("./MainPage"));

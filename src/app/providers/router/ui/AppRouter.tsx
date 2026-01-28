import React, { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRouteProps, routeConfig } from "@/shared/config/route/routeConfig";
import { PageLoader } from "@/widgets/PageLoader/ui/PageLoader";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = React.memo(() => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">{route.element}</div>
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      ></Route>
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map((route: AppRouteProps) =>
          renderWithWrapper(route),
        )}
      </Routes>
    </Suspense>
  );
});

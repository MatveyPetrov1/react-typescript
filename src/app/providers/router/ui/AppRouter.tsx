import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "@/shared/config/route/routeConfig";
import { PageLoader } from "@/widgets/PageLoader/ui/PageLoader";
import { getUserAuthData } from "@/entities/User";
import { useSelector } from "react-redux";

export const AppRouter = React.memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = React.useMemo(() => {
    return Object.values(routeConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }

      return true;
    });
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          ></Route>
        ))}
      </Routes>
    </Suspense>
  );
});

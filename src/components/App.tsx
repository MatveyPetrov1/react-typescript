import "../styles/index.scss";
import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { MainPageAsync as MainPage } from "../pages/MainPage/MainPage.async";
import { AboutPageAsync as AboutPage } from "../pages/AboutPage/AboutPage.async";
import { useTheme } from "../theme/useTheme";
import { classNames } from "../helpers/classNames/classNames";

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button type="button" onClick={toggleTheme}>
        Сменить тему
      </button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/about"} element={<AboutPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

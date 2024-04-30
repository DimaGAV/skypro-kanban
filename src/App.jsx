import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import MainPage from "./pages/MainPage/MainPage";
import CardPage from "./pages/CardPage/CardPage";
import Login from "./pages/Login/Login";
import Exit from "./pages/Exit/Exit";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";

export default function App() {
  const isAuth = true;

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/card"} element={<CardPage />} />
        <Route path={"/exit"} element={<Exit />} />
      </Route>

      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

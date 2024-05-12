import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "./pages/MainPage/MainPage";
import CardPage from "./pages/CardPage/CardPage";
import Login from "./pages/Login/Login";
// import Exit from "./pages/Exit/Exit";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import { useState } from "react";
import PopUser from "./components/Popups/PopUser/PopUser";

export const AppRoutes = {
  MAIN: "/",
  CARD: "/card",
  NOT_FOUND: "*",
  USER_EXIT: "/exit",
  LOGIN: "/login",
  REGISTER: "/register",
};

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null)

  return (
    <Routes>
<<<<<<< HEAD
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={AppRoutes.MAIN} element={<MainPage />}>
        <Route path={AppRoutes.CARD + "/:id"} element={<CardPage />} />
        <Route path={AppRoutes.USER_EXIT} element={<PopUser setIsAuth={setIsAuth}/>} />
=======
      <Route element={<PrivateRoute isAuth={isAuth} user={user}/>}>
        <Route path={AppRoutes.MAIN} element={<MainPage user={user}/>}>
        <Route path={AppRoutes.CARD + "/:id"} element={<CardPage />} />
        <Route path={AppRoutes.USER_EXIT} element={<PopUser setIsAuth={setIsAuth} setUser={setUser}/>} />
>>>>>>> ce2cf867162af195a9be8716b53ef73177d6d421
        </Route>
      </Route>

    <Route path={AppRoutes.LOGIN} element={<Login setIsAuth={setIsAuth} setUser={setUser}/>} />
      <Route path={AppRoutes.REGISTER} element={<Register />} />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

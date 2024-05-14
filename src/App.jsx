import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "./pages/MainPage/MainPage";
import CardPage from "./pages/CardPage/CardPage";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import { useState } from "react";
import PopUser from "./components/Popups/PopUser/PopUser";
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard";

export const AppRoutes = {
  MAIN: "/",
  CARD: "/card",
  NOT_FOUND: "*",
  USER_EXIT: "/exit",
  LOGIN: "/login",
  REGISTER: "/register",
  NEWCARD: "/newcard"
};

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={AppRoutes.MAIN} element={<MainPage user={user} />}>
          <Route path={AppRoutes.CARD + "/:id"} element={<CardPage />} />
          <Route path={AppRoutes.NEWCARD} element={<PopNewCard/>} />
          <Route
            path={AppRoutes.USER_EXIT}
            element={<PopUser setUser={setUser} />}
          />
        </Route>
      </Route>

      <Route
        path={AppRoutes.LOGIN}
        element={<Login setUser={setUser} />}
      />
      <Route path={AppRoutes.REGISTER} element={<Register />} />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

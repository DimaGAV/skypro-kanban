import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "./pages/MainPage/MainPage";
import CardPage from "./pages/CardPage/CardPage";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import PopUser from "./components/Popups/PopUser/PopUser";
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard";
import { TaskProvider } from "./context/tasks";
import "react-day-picker/dist/style.css";


export const AppRoutes = {
  MAIN: "/",
  CARD: "/card",
  NOT_FOUND: "*",
  USER_EXIT: "/exit",
  LOGIN: "/login",
  REGISTER: "/register",
  NEWCARD: "/newcard",
};

export default function App() {

  return (
    <Routes>
      <Route
        element={
          <TaskProvider>
            <PrivateRoute />
          </TaskProvider>
        }
      >
        <Route path={AppRoutes.MAIN} element={<MainPage />}>
          <Route path={AppRoutes.CARD + "/:id"} element={<CardPage />} />
          <Route path={AppRoutes.NEWCARD} element={<PopNewCard />} />
          <Route
            path={AppRoutes.USER_EXIT}
            element={<PopUser />}
          />
        </Route>
      </Route>

      <Route path={AppRoutes.LOGIN} element={<Login />} />
      <Route path={AppRoutes.REGISTER} element={<Register />} />
      <Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

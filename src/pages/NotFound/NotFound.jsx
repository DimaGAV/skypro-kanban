import { Link } from "react-router-dom";
import { AppRoutes } from "../../App";

export default function NotFound() {
    return (
      <div>
        <h1>Страница не найдена!</h1>
        <Link to={AppRoutes.MAIN}>На главную</Link>
      </div>
    );
  }
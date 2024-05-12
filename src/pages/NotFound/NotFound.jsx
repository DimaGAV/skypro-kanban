import { Link } from "react-router-dom";
import { AppRoutes } from "../../App";

export default function NotFound() {
  return (
    <div>
      <h1>Страница не найдена! Ошибка 404</h1>
      <Link to={AppRoutes.LOGIN}>Войти/Зарегистрироваться</Link>
    </div>
  );
}

import { Link } from "react-router-dom";
import { AppRoutes } from "../../App";

export default function Login() {
  return (
    <div>
      <h1>Вход</h1>
      {/* Если пользователь уже авторизован, 
      то будет переход на главную. 
      
      В противном случае переход не произойдет */}
<input type="mail" />
<input type="password" />
      <Link to={AppRoutes.MAIN}>
        <button>Войти</button>
      </Link>

      <p>Нужно зарегестрироваться?</p>
      <Link to={AppRoutes.REGISTER}>Регистрируйтесь здесь</Link>
    </div>
  );
}

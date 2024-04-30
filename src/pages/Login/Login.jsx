import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Страница логина, войти?</h1>
      {/* Если пользователь уже авторизован, 
      то будет переход на главную. 
      
      В противном случае переход не произойдет */}
      <Link to="/">Да!</Link>
    </div>
  );
}

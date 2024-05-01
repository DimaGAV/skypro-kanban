import { Link } from "react-router-dom";
import { AppRoutes } from "../../App";
import * as S from "../../components/Form/Form";


export default function Login() {
  return (
    <S.Form>
      <S.FormContainer>
        <S.FormHeader>Вход</S.FormHeader>
        {/* Если пользователь уже авторизован, 
      то будет переход на главную. 
      
      В противном случае переход не произойдет */}
        <S.FormInput type="mail" placeholder="Эл. почта" />
        <S.FormInput type="password" placeholder="Пароль" />

        <Link to={AppRoutes.MAIN}>
          <S.FormButton>Войти</S.FormButton>
        </Link>
        <S.FormFooter>
          <p>Нужно зарегестрироваться?</p>
          <Link to={AppRoutes.REGISTER}>Регистрируйтесь здесь</Link>
        </S.FormFooter>
      </S.FormContainer>
    </S.Form>
  );
}

import { Link } from "react-router-dom";
import { AppRoutes } from "../../App";
import * as S from "../../components/Form/Form";

export default function Login({ setIsAuth }) {
  
  const handleLogin = () => {
    setIsAuth(true);
    
  }

  const linkStyle = {
    color: 'rgba(148, 166, 190, 0.4)'
  }

  return (
    <S.Form>
      <S.FormContainer>
        <S.FormHeader>Вход</S.FormHeader>
        <S.FormInput type="mail" placeholder="Эл. почта" />
        <S.FormInput type="password" placeholder="Пароль" />

        <Link to={AppRoutes.MAIN}>
          <S.FormButton onClick={handleLogin}>Войти</S.FormButton>
        </Link>
        <S.FormFooter>
          <S.FooterText>Нужно зарегистрироваться?</S.FooterText>
          <Link to={AppRoutes.REGISTER} style={linkStyle}>Регистрируйтесь здесь</Link>
        </S.FormFooter>
      </S.FormContainer>
    </S.Form>
  );
}

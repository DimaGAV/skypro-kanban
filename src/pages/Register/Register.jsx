import { Link } from "react-router-dom";
import { AppRoutes } from "../../App";
import * as S from "../../components/Form/Form";



export default function Register() {

  const linkStyle = {
    color: 'rgba(148, 166, 190, 0.4)'
  }

    return (
    <S.Form>
      <S.FormContainer>
        <S.FormHeader>Регистрация</S.FormHeader>
        
        <S.FormInput type="text" placeholder="Имя" />
        <S.FormInput type="mail" placeholder="Эл. почта" />
        <S.FormInput type="password" placeholder="Пароль" />

        <Link to={AppRoutes.MAIN}>
          <S.FormButton /* onClick = {} */>Зарегистрироваться</S.FormButton>
        </Link>
        <S.FormFooter>
          Уже есть аккаунт? <Link to={AppRoutes.LOGIN} style={linkStyle}>Войдите здесь</Link>
        </S.FormFooter>
      </S.FormContainer>
    </S.Form>
  );
}

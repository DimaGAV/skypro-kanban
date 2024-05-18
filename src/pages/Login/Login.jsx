import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../App";
import * as S from "../../components/Form/Form";
import { useState } from "react";
import { loginUser } from "../../api";
import { useUser } from "../../hooks/useUser";

export default function Login() {
  const { isLoginUser } = useUser();
  const [addLoginError, setAddLoginError] = useState(null);
  const linkStyle = {
    color: "rgba(148, 166, 190, 0.4)",
  };

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!formData.login || formData.login.trim().length === 0) {
      setAddLoginError("Не введен логин!");
      return;
    }

    if (!formData.password || formData.password.trim().length === 0) {
      setAddLoginError("Не введен пароль!");
      return;
    }

    try {
      const data = await loginUser(formData);
      console.log("User logged in, navigating to main page...");
      isLoginUser(data.user);
      navigate(AppRoutes.MAIN);
    } catch (error) {
      console.error("Ошибка", error);
      setAddLoginError(error.message);
    }
  };

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target; // Извлекаем имя поля и его значение

    setFormData({
      ...formData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  return (
    <S.Form onSubmit={handleLogin}>
      <S.FormContainer>
        <S.FormHeader>Вход</S.FormHeader>
        <S.FormInput
          type="text"
          value={formData.login}
          onChange={handleInputChange}
          name="login"
          placeholder="Логин"
        />
        <S.FormInput
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          name="password"
          placeholder="Пароль"
        />
        {addLoginError && <p style={{ color: "red" }}>{addLoginError}</p>}
        <S.FormButton type="submit">Войти</S.FormButton>
        <S.FormFooter>
          <S.FooterText>Нужно зарегистрироваться?</S.FooterText>
          <Link to={AppRoutes.REGISTER} style={linkStyle}>
            Регистрируйтесь здесь
          </Link>
        </S.FormFooter>
      </S.FormContainer>
    </S.Form>
  );
}

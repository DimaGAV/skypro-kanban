import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../App";
import * as S from "../../components/Form/Form.styled";
import { useState } from "react";
import { registerUser } from "../../api";

export default function Register() {
  const [regError, setRegError] = useState(null);
  const linkStyle = {
    color: "rgba(148, 166, 190, 0.4)",
  };

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    if (formData.name.trim().length === 0) {
      setRegError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
      return;
    }

    if (formData.login.trim().length === 0) {
      setRegError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
      return;
    }

    if (formData.password.trim().length === 0) {
      setRegError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
      return;
    }

    try {
      const response = await registerUser(formData);
      console.log(response);
      navigate(AppRoutes.LOGIN);
    } catch (error) {
      setRegError(error.message);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <S.Form onSubmit={handleRegister}>
      <S.FormContainer>
        <S.FormHeader>Регистрация</S.FormHeader>
        <S.FormInput
          type="text"
          value={formData.name}
          name="name"
          placeholder="Имя"
          onChange={handleInputChange}
        />
        <S.FormInput
          type="text"
          value={formData.login}
          name="login"
          placeholder="Логин"
          onChange={handleInputChange}
        />
        <S.FormInput
          type="password"
          value={formData.password}
          name="password"
          placeholder="Пароль"
          onChange={handleInputChange}
        />
        {regError && <S.TextError>{regError}</S.TextError>}
        <S.FormButton type="submit">Зарегистрироваться</S.FormButton>
        <S.FormFooter>
          Уже есть аккаунт?{" "}
          <Link to={AppRoutes.LOGIN} style={linkStyle}>
            Войдите здесь
          </Link>
        </S.FormFooter>
      </S.FormContainer>
    </S.Form>
  );
}

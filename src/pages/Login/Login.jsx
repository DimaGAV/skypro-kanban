import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../App";
import * as S from "../../components/Form/Form";
import { useState } from "react";
import { loginUser } from "../../api";


export default function Login({setIsAuth}) {
  const [addLoginError, setAddLoginError] = useState(null)
  const linkStyle = {
    color: 'rgba(148, 166, 190, 0.4)'}

  const navigate = useNavigate();

  const handleLogin = async () => {
   try {
    const data = await loginUser(formData)
    console.log(data);
    setIsAuth (true)

    navigate(AppRoutes.MAIN)

   } catch (error) {
    console.error("Ошибка при входе", error);
    setAddLoginError("Введенные Вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.")
   }
  }

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setFormData({
      ...formData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
    // console.log(`Submitted login: ${formData.login}, Last Name: ${formData.password}`
    // );
  };

  return (
    <S.Form>
      <S.FormContainer>
        <S.FormHeader>Вход</S.FormHeader>
        <S.FormInput 
        type="text"
        value={formData.login}
        onChange={handleInputChange}
        name="login"
        label="Логин"
        placeholder="Логин"/>
        <S.FormInput
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        name="password"
        label="Пароль"
        placeholder="Пароль"/>
          <p style={{color: "red"}}>{addLoginError}</p>
          <S.FormButton type="button" onClick={handleLogin}>Войти</S.FormButton>
        <S.FormFooter>
          <S.FooterText>Нужно зарегистрироваться?</S.FooterText>
          <Link to={AppRoutes.REGISTER} style={linkStyle}>Регистрируйтесь здесь</Link>
        </S.FormFooter>
      </S.FormContainer>
    </S.Form>
  );
}

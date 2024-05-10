import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../App";
import * as S from "../../components/Form/Form";
import { useState } from "react";
import { registerUser } from "../../api";

export default function Register() {

  const [addUserError, setAddUserError] = useState(null)

  const linkStyle = {
    color: 'rgba(148, 166, 190, 0.4)'
  }

  const navigate = useNavigate();

  const handleRegister = async () => {
   try {
    const data = await registerUser(formData)
    console.log(data);
    // setIsAuth (true)

    navigate(AppRoutes.MAIN)

   } catch (error) {
    console.error("Ошибка:", error);
    setAddUserError("Введенные Вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.")
   }
  }

  const [formData, setFormData] = useState({
    name: "",
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
        <S.FormHeader>Регистрация</S.FormHeader>
        
        <S.FormInput 
        type="text"
        value={formData.name}
        name="name"
        placeholder="Имя"
        onChange={handleInputChange}
        label="Имя"
         />
        <S.FormInput
        type="text"
        value={formData.login}
        name="login"
        placeholder="Логин"
        onChange={handleInputChange}
        label="Логин" />
        <S.FormInput
        type="password"
        value={formData.password}
        name="password"
        placeholder="Пароль"
        onChange={handleInputChange}
        label="Пароль" />

        {/* <Link to={AppRoutes.MAIN}> */}
          <S.FormButton onClick = {handleRegister}>Зарегистрироваться</S.FormButton>
        {/* </Link> */}
        <S.FormFooter>
          Уже есть аккаунт? <Link to={AppRoutes.LOGIN} style={linkStyle}>Войдите здесь</Link>
        </S.FormFooter>
      </S.FormContainer>
    </S.Form>
  );
}

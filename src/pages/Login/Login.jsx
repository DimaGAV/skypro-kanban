import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../App";
import * as S from "../../components/Form/Form";
import { useState } from "react";
import { loginUser } from "../../api";

<<<<<<< HEAD
export default function Login({ setIsAuth }) {
  
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsAuth(true);
    navigate(AppRoutes.MAIN)
  }
=======
>>>>>>> ce2cf867162af195a9be8716b53ef73177d6d421

export default function Login({setIsAuth, setUser}) {
  const [addLoginError, setAddLoginError] = useState(null)
  const linkStyle = {
    color: 'rgba(148, 166, 190, 0.4)'}

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault()
    if (!formData.login || formData.login.trim().length === 0) {
      setAddLoginError("Не введен логин!")
      return
    }
   
    if (!formData.password || formData.password.trim().length === 0) {
      setAddLoginError("Не введен пароль!")
      return
    }
   
    try {
    const data = await loginUser(formData)
    setIsAuth (true)
    setUser(data.user)
    // console.log(data.user);
    navigate(AppRoutes.MAIN)

   } catch (error) {
    console.error("Ошибка", error);
    // setAddLoginError(error.message)
    setAddLoginError("Введенные Вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.")
   }
  }

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
<<<<<<< HEAD
        <S.FormInput type="mail" placeholder="Эл. почта" />
        <S.FormInput type="password" placeholder="Пароль" />

        {/* <Link to={AppRoutes.MAIN}> */}
          <S.FormButton type="button" onClick={handleLogin}>Войти</S.FormButton>
        {/* </Link> */}
=======
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
          {addLoginError && <p style={{color: "red"}}>{addLoginError}</p>}
          <S.FormButton type="submit">Войти</S.FormButton>
>>>>>>> ce2cf867162af195a9be8716b53ef73177d6d421
        <S.FormFooter>
          <S.FooterText>Нужно зарегистрироваться?</S.FooterText>
          <Link to={AppRoutes.REGISTER} style={linkStyle}>Регистрируйтесь здесь</Link>
        </S.FormFooter>
      </S.FormContainer>
    </S.Form>
  );
}

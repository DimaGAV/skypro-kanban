import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styled/common";
import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../App";
import { useUser } from "../../hooks/useUser";

const Header = () => {
  const { user } = useUser();
  const [userWindow, setWindow] = useState(true);
  function handleClick() {
    setWindow(!userWindow);

    if (userWindow) {
      document.getElementById("user-set-target").style.display = "block";
    } else {
      document.getElementById("user-set-target").style.display = "none";
    }
  }

  const navigate = useNavigate();
  const handleExit = () => {
    navigate(AppRoutes.USER_EXIT);
  };

  return (
    <S.Header>
      <Container>
        <S.Block>
          <S.Logo>
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </S.Logo>
          <S.Logo>
            <a href="" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </S.Logo>
          <S.Nav>
            <S.BtnMainNew id="btnMainNew">
              <Link to={AppRoutes.NEWCARD}>
                <S.BtnMainNewText>Создать новую задачу</S.BtnMainNewText>
              </Link>
            </S.BtnMainNew>
            <S.User href="#" onClick={handleClick}>
              {user.name}
            </S.User>
            <S.PopUserSet id="user-set-target">
              <S.PUSName>{user.name}</S.PUSName>
              <S.PUSMial>{user.login}</S.PUSMial>
              <S.PUSTheme>
                {/* <p>Темная тема</p>
                <S.PUSThemeInput type="checkbox" /> */}
              </S.PUSTheme>
              <S.PUSButton onClick={handleExit} type="button">
                Выйти
              </S.PUSButton>
            </S.PopUserSet>
          </S.Nav>
        </S.Block>
      </Container>
    </S.Header>
  );
};

export default Header;

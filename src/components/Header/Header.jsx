import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styled/common";


const Header = ({ onCardAdd }) => {
  const [userWindow, setWindow] = useState(true);
  function handleClick() {
    setWindow(!userWindow);

    if (userWindow) {
      document.getElementById("user-set-target").style.display = "block";
    } else {
      document.getElementById("user-set-target").style.display = "none";
    }
  }
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
            <S.BtnMainNew onClick={onCardAdd} id="btnMainNew">
              <S.BtnMainNewLink href="#">Создать новую задачу</S.BtnMainNewLink>
            </S.BtnMainNew>
            <S.User href="#" onClick={handleClick}>
              Ivan Ivanov
            </S.User>
            <div
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
            >
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </div>
          </S.Nav>
        </S.Block>
      </Container>
    </S.Header>
  );
};

export default Header;

import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../App";
import { useUser } from "../../../hooks/useUser";
import * as S from "./PopUser.styled";

const PopUser = () => {
  const { logoutUser } = useUser();
  const navigate = useNavigate();

  const handleToMain = () => {
    navigate(AppRoutes.MAIN);
    document.getElementById("user-set-target").style.display = "none";
  };
  return (
    <S.PopExit id="popExit">
      <S.PEContainer>
        <S.PEBlock>
          <S.PETtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PETtl>
          <form id="formExit" action="#">
            <S.PEFormGroup>
              <S.PEExitYes onClick={logoutUser} id="exitYes">
                Да, выйти
              </S.PEExitYes>
              <S.PEExitNo type="button" onClick={handleToMain} id="exitNo">
                Нет, остаться
              </S.PEExitNo>
            </S.PEFormGroup>
          </form>
        </S.PEBlock>
      </S.PEContainer>
    </S.PopExit>
  );
};

export default PopUser;

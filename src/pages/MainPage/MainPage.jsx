import { useEffect, useState } from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { GlobalStyle } from "../../components/Global/Global.styled";
import { Wrapper } from "../../styled/common";
import { Outlet } from "react-router-dom";
import { getCadrs } from "../../api";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";

function MainPage() {
  const { user } = useUser();
  const { setTasks } = useTasks();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadingErrorText = {
    color: "red",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };

  useEffect(() => {
    const onCards = async () => {
      try {
        const res = await getCadrs({
          token: user.token,
        });
        setTasks(res.tasks);
      } catch (error) {
        console.error(error);
        setError("Не удалось загрузить данные, попробуйте позже");
      } finally {
        setIsLoading(false);
      }
    };
    onCards();
  }, [setTasks, user.token]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        {error && <p style={loadingErrorText}>{error}</p>}
        {!error && <Main isLoading={isLoading} />}
        <Outlet />
      </Wrapper>
    </>
  );
}

export default MainPage;

import { useEffect, useState } from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
// import { statusList } from "../../data";
import { GlobalStyle } from "../../components/Global/Global.styled";
import { Wrapper } from "../../styled/common";
import { Outlet } from "react-router-dom";
import { getCadrs } from "../../api";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";

function MainPage(/* { user } */) {
  const { user } = useUser();
  const { setTasks } = useTasks();
  // const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadingErrorText = {
    color: "red",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };

  /* function onCardAdd() {
    const newCard = {
      _id: cards.length + 1,
      topic: "Тема",
      title: "Название задачи",
      date: new Date().toLocaleDateString(),
      status: statusList[0],
    };
    setCards([...cards, newCard]);
  } */

  useEffect(() => {
    const onCards = async () => {
      try {
        const res = await getCadrs({
          token: user.token,
        });
        setTasks(res.tasks);
        // setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError("Не удалось загрузить данные, попробуйте позже");
      } finally {
        setIsLoading(false);
      }
    };
    onCards();
  }, [user, setTasks]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header /* user={user}  *//>
        {error && <p style={loadingErrorText}>{error}</p>}
        {!error && <Main /* cards={cards}  */ isLoading={isLoading} />}
        <Outlet />
      </Wrapper>
    </>
  );
}

export default MainPage;

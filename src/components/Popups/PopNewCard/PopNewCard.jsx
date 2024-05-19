import { useState } from "react";
import { useTasks } from "../../../hooks/useTasks";
import { useUser } from "../../../hooks/useUser";
import * as M from "../../../styled/modal";
import Calendar from "../../Calendar/Calendar";
import { AppRoutes } from "../../../App";
import { addNewTask } from "../../../api";
import { Link, useNavigate } from "react-router-dom";
import { getTopicColor } from "../../../data";

const PopNewCard = () => {
  const { getTasks } = useTasks();
  const { user } = useUser();

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [newTask, setNewTask] = useState({
    title: "",
    topic: "",
    description: "",
    date: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleDateChange = (selectedDate) => {
    setNewTask({
      ...newTask,
      date: selectedDate,
    });
  };

  const handleTopicChange = (topic) => {
    setNewTask({
      ...newTask,
      topic,
    });
  };

  const handleNewTaskAdd = async (e) => {
    
    try {
      e.preventDefault();
      if (!newTask.title || newTask.title.trim().length === 0) {
        setError("Не введено название!");
        return;
      }

      if (!newTask.description || newTask.description.trim().length === 0) {
        setError("Не введено описание!");
        return;
      }

      if (!newTask.topic) {
        setError("Не выбрана категория!");
        return;
      }

      if (!newTask.date) {
        setError("Не выбран срок исполнения!");
        return;
      }

      await addNewTask({
        token: user.token,
        title: newTask.title,
        topic: newTask.topic,
        status: "Без статуса",
        description: newTask.description,
        date: newTask.date,
      }).then((data) => {
        getTasks(data.tasks);
        navigate(AppRoutes.MAIN);
      });
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <M.CardMain id="popNewCard">
      <M.Container>
        <M.Block>
          <M.Content>
            <M.CardTitle>Создание задачи</M.CardTitle>
            <Link to={AppRoutes.MAIN}>
              <M.Close>&#10006;</M.Close>
            </Link>
            <M.Wrap>
              <M.Form id="formNewCard" onSubmit={handleNewTaskAdd}>
                <M.FormBlock>
                  <M.Subttl htmlFor="formTitle">Название задачи</M.Subttl>
                  <M.FormInput
                    type="text"
                    value={newTask.title}
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    onChange={handleInputChange}
                    autoFocus
                  />
                </M.FormBlock>
                <M.FormBlock>
                  <M.Subttl htmlFor="textArea">Описание задачи</M.Subttl>
                  <M.FormArea
                    type="textarea"
                    value={newTask.description}
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={handleInputChange}
                  ></M.FormArea>
                </M.FormBlock>
              </M.Form>
              <M.CardCalendar>
                <M.CalendarTtl>Даты</M.CalendarTtl>
                <Calendar
                  selected={newTask.date}
                  setSelected={handleDateChange}
                />
                <M.SelectedDate>
                  Выберите срок исполнения.{" "}
                  {newTask.date
                    ? newTask.date.toLocaleDateString()
                    : "Не выбрано"}
                </M.SelectedDate>
              </M.CardCalendar>
            </M.Wrap>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <M.Categories>
              <M.CategoriesTtl>Категория</M.CategoriesTtl>
              <M.CategoriesThemes>
                {["Web Design", "Research", "Copywriting"].map((topic) => (
                  <M.CategoriesTheme
                    key={topic}
                    $isActive={newTask.topic === topic}
                    $topicColor={getTopicColor(topic)}
                    onClick={() => handleTopicChange(topic)}
                  >
                    <M.CategoriesThemeP $topicColor={getTopicColor(topic)}>
                      {topic}
                    </M.CategoriesThemeP>
                  </M.CategoriesTheme>
                ))}
              </M.CategoriesThemes>
            </M.Categories>
            <M.CreateBtn
              onClick={handleNewTaskAdd}
              type="submit"
              id="btnCreate"
            >
              Создать задачу
            </M.CreateBtn>
          </M.Content>
        </M.Block>
      </M.Container>
    </M.CardMain>
  );
};

export default PopNewCard;

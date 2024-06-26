import { Link, useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import { AppRoutes } from "../../../App";
import * as M from "../../../styled/modal";
import { deleteCadr, updateTask } from "../../../api";
import { useTasks } from "../../../hooks/useTasks";
import { useUser } from "../../../hooks/useUser";
import { useEffect, useState } from "react";
import { getTopicColor } from "../../../data";
import { BtnMainNewText } from "../../Header/Header.styled";

const PopBrowse = ({ id }) => {
  const { tasks, getTasks } = useTasks();
  const { user } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [currentTask, setCurrentTask] = useState({
    title: "",
    status: "",
    description: "",
    date: null,
    topic: "",
  });

  useEffect(() => {
    const task = tasks.find((task) => task._id === id);
    if (task) {
      setCurrentTask({
        title: task.title || "",
        status: task.status || "",
        description: task.description || "",
        date: task.date ? new Date(task.date) : null,
        topic: task.topic || "",
      });
    } else {
      setError("Задача не найдена");
    }
  }, [tasks, id]);

  const handleDeleteTask = async (e) => {
    if (user && user.token) {
      try {
        e.preventDefault();
        await deleteCadr({ token: user.token, id }).then((data) => {
          getTasks(data.tasks);

          navigate(AppRoutes.MAIN);
        });
      } catch (error) {
        console.error("Ошибка:", error);
        setError(error.massage);
      }
    }
  };

  const handleStatusChange = (status) => {
    setCurrentTask((prevState) => ({
      ...prevState,
      status,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (selectedDate) => {
    setCurrentTask((prevState) => ({
      ...prevState,
      date: selectedDate,
    }));
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setError(null);
  };

  const handleEditTask = async (e) => {
    try {
      e.preventDefault();

      if (
        !currentTask.description ||
        currentTask.description.trim().length === 0
      ) {
        setError("Не введено описание!");
        return;
      }

      if (!currentTask.date) {
        setError("Не выбран срок исполнения!");
        return;
      }

      await updateTask({
        token: user.token,
        id,
        status: currentTask.status,
        description: currentTask.description,
        date: currentTask.date,
        topic: currentTask.topic,
        title: currentTask.title,
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
    <M.ModalMain id="popBrowse">
      <M.Container>
        <M.Block>
          <M.Content>
            <M.BrowseTopBlock>
              <M.Title>{currentTask.title}</M.Title>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <M.ThemeTop>
                <M.CategoriesTheme
                  $isActive
                  $topicColor={getTopicColor(currentTask.topic)}
                >
                  <M.CategoriesThemeP
                    $topicColor={getTopicColor(currentTask.topic)}
                  >
                    {currentTask.topic}
                  </M.CategoriesThemeP>
                </M.CategoriesTheme>
              </M.ThemeTop>
            </M.BrowseTopBlock>
            <M.Status>
              <M.StatusPTtl>Статус</M.StatusPTtl>
              <M.CurrentStatus $isEditing={!isEditing}>
                <p>{currentTask.status}</p>
              </M.CurrentStatus>
              <M.StatusThemes>
                {[
                  "Без статуса",
                  "Нужно сделать",
                  "В работе",
                  "Тестирование",
                  "Готово",
                ].map((status) => (
                  <M.StatusTheme
                    key={status}
                    $isEditing={isEditing}
                    $isActive={currentTask.status === status}
                    onClick={() => handleStatusChange(status)}
                  >
                    <p>{status}</p>
                  </M.StatusTheme>
                ))}
              </M.StatusThemes>
            </M.Status>
            <M.Wrap>
              <M.Form id="formBrowseCard" action="#">
                <M.FormBlock>
                  <M.Subttl /* htmlFor="textArea01" */>
                    Описание задачи
                  </M.Subttl>
                  <M.FormBrowseArea
                    name="description"
                    id="textArea01"
                    readOnly={!isEditing}
                    value={currentTask.description}
                    onChange={handleInputChange}
                    placeholder="Введите описание задачи..."
                    $isEditing={isEditing}
                  ></M.FormBrowseArea>
                </M.FormBlock>
              </M.Form>
              <M.CardCalendar>
                <M.CalendarTtl>Даты</M.CalendarTtl>
                <Calendar
                  selected={currentTask.date}
                  setSelected={handleDateChange}
                />
                <M.SelectedDate>
                  Срок исполнения:{" "}
                  <M.SelectedDateSpan>
                    {currentTask.date
                      ? currentTask.date.toLocaleDateString()
                      : " "}
                  </M.SelectedDateSpan>
                </M.SelectedDate>
              </M.CardCalendar>
            </M.Wrap>
            <M.ThemeDown>
              <M.CategoriesTtl>Категория</M.CategoriesTtl>
              <M.CategoriesTheme
                $isActive
                $topicColor={getTopicColor(currentTask.topic)}
              >
                <M.CategoriesThemeP
                  $topicColor={getTopicColor(currentTask.topic)}
                >
                  {currentTask.topic}
                </M.CategoriesThemeP>
              </M.CategoriesTheme>
            </M.ThemeDown>
            <M.BrowseButtons>
              <M.BrowseButtonsGroup $isEditing={!isEditing}>
                <M.BrowseButtonBor onClick={handleEditClick}>
                  Редактировать задачу
                </M.BrowseButtonBor>
                <M.BrowseButtonBor onClick={handleDeleteTask}>
                  Удалить задачу
                </M.BrowseButtonBor>
              </M.BrowseButtonsGroup>
              <M.BrowseButtonsGroup $isEditing={isEditing}>
                <M.BrowseButtonBor onClick={handleEditTask}>
                  Сохранить
                </M.BrowseButtonBor>
                <M.BrowseButtonBor onClick={handleCancelEdit}>
                  Отменить
                </M.BrowseButtonBor>
                <M.BrowseButtonBor onClick={handleDeleteTask}>
                  Удалить задачу
                </M.BrowseButtonBor>
              </M.BrowseButtonsGroup>
              <M.BrowseButtonBg>
                <Link to={AppRoutes.MAIN}>
                  <BtnMainNewText>Закрыть</BtnMainNewText>
                </Link>
              </M.BrowseButtonBg>
            </M.BrowseButtons>
          </M.Content>
        </M.Block>
      </M.Container>
    </M.ModalMain>
  );
};

export default PopBrowse;

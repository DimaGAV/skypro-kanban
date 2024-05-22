import { Link, useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import { AppRoutes } from "../../../App";
import * as M from "../../../styled/modal";
import { deleteCadr, updateTask } from "../../../api";
import { useTasks } from "../../../hooks/useTasks";
import { useUser } from "../../../hooks/useUser";
import { useState } from "react";
import { getTopicColor } from "../../../data";

const PopBrowse = ({ id }) => {
  const { getTasks } = useTasks();
  const { user } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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

  const [currentTask, setCurrentTask] = useState({
    title: "",
    status: "",
    description: "",
    date: null,
    topic: "Web Design",
  });

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

      if (!currentTask.status) {
        setError("Не выбран статус!");
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
              <M.Title>Название задачи</M.Title>
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
            </M.BrowseTopBlock>
            <M.Status>
              <M.StatusPTtl>Статус</M.StatusPTtl>
              <M.StatusThemes>
                {[
                  "Без статуса",
                  "Нужно сделать",
                  "В работе",
                  "Тестирование",
                  "Готово",
                ].map((status) => (
                  <M.StatusThem
                    key={status}
                    isEditing={isEditing}
                    isActive={currentTask.status === status}
                    onClick={() => handleStatusChange(status)}
                  >
                    <p>{status}</p>
                  </M.StatusThem>
                ))}
              </M.StatusThemes>
            </M.Status>
            <M.Wrap>
              <M.Form id="formBrowseCard" action="#">
                <M.FormBlock>
                  <M.Subttl htmlFor="textArea01">Описание задачи</M.Subttl>
                  <M.FormBrowseArea
                    name="description"
                    id="textArea01"
                    readOnly={!isEditing}
                    value={currentTask.description}
                    onChange={handleInputChange}
                    placeholder="Введите описание задачи..."
                    isEditing={isEditing}
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
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button
                  onClick={handleDeleteTask}
                  className="btn-browse__delete _btn-bor _hover03"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to={AppRoutes.MAIN}>Закрыть</Link>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </M.Content>
        </M.Block>
      </M.Container>
    </M.ModalMain>
  );
};

export default PopBrowse;

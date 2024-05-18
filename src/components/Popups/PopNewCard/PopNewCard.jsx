import { useState } from "react";
import { useTasks } from "../../../hooks/useTasks";
import { useUser } from "../../../hooks/useUser";
import * as M from "../../../styled/modal";
import Calendar from "../../Calendar/Calendar";
import { AppRoutes } from "../../../App";
import { addNewTask } from "../../../api";
import { Link } from "react-router-dom";

const PopNewCard = () => {
  const { getTasks } = useTasks();
  const { user } = useUser();

  const [newTask, setNewTask] = useState({
    title: "",
    topic: "",
    description: "",
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
    /* let newCard = {
      ...newTask, data.selected,
    } */
    try {
      e.preventDefault();
      await addNewTask({
        token: user.token,
        title: newTask.title,
        topic: newTask.topic,
        status: "Без статуса",
        description: newTask.description,
        date: newTask.date,
      }).then((data) => {
        getTasks(data.tasks);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <M.CardMain id="popNewCard">
      <M.Container>
        <M.Block>
          <M.Content>
            <M.CardTitle>Создание задачи</M.CardTitle>
            <Link to={AppRoutes.MAIN}>&#10006;</Link>
            {/* <a href="#" className="pop-new-card__close">
              &#10006;
            </a> */}
            <M.Wrap>
              <M.Form
                id="formNewCard"
                /* action="#"  */ onSubmit={handleNewTaskAdd}
              >
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
                <Calendar setSelected={handleDateChange} />
              </M.CardCalendar>
            </M.Wrap>
            <M.Categories>
              <M.CategoriesTtl>Категория</M.CategoriesTtl>
              <M.CategoriesThemes>
                {["Web Design", "Research", "Copywriting"].map((topic) => (
                  <div
                    key={topic}
                    className={`categories__theme _${topic
                      .toLowerCase()
                      .replace(" ", "_")} ${
                      newTask.topic === topic ? "_active-category" : ""
                    }`}
                    onClick={() => handleTopicChange(topic)}
                  >
                    <p className={`_${topic.toLowerCase().replace(" ", "_")}`}>
                      {topic}
                    </p>
                  </div>
                ))}
                {/* <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div> */}
              </M.CategoriesThemes>
            </M.Categories>
            <button
              onClick={handleNewTaskAdd}
              type="submit"
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </M.Content>
        </M.Block>
      </M.Container>
    </M.CardMain>
  );
};

export default PopNewCard;

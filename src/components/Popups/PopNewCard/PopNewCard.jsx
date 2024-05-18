import { useState } from "react";
import { useTasks } from "../../../hooks/useTasks";
import { useUser } from "../../../hooks/useUser";
import * as M from "../../../styled/modal";
import Calendar from "../../Calendar/Calendar";

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

  const handleNewTaskAdd = async (e) => {
    let newCard = {
      ...newTask, data.selected,
    }
  try {
    e.preventDefault()
    await addNewTask({
      token: user.token,
      title: newCard.title,
      topic: newCard.topic,
      status: "Без статуса",
      description: newCard.description,
      date: newCard.data
    })
    .then((data) => {
      getTasks(data.tasks)
    })
  } catch (error) {
    
  }

  }

  
  return (
    <M.CardMain id="popNewCard">
      <M.Container>
        <M.Block>
          <M.Content>
            <M.CardTitle>Создание задачи</M.CardTitle>
            <a href="#" className="pop-new-card__close">
              &#10006;
            </a>
            <M.Wrap>
              <M.Form id="formNewCard" action="#">
                <M.FormBlock>
                  <M.Subttl htmlFor="formTitle">Название задачи</M.Subttl>
                  <M.FormInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </M.FormBlock>
                <M.FormBlock>
                  <M.Subttl htmlFor="textArea">Описание задачи</M.Subttl>
                  <M.FormArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></M.FormArea>
                </M.FormBlock>
              </M.Form>
              <M.CardCalendar>
                <M.CalendarTtl>Даты</M.CalendarTtl>
                <Calendar />
              </M.CardCalendar>
            </M.Wrap>
            <M.Categories>
              <M.CategoriesTtl>Категория</M.CategoriesTtl>
              <M.CategoriesThemes>
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </M.CategoriesThemes>
            </M.Categories>
            <button className="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </M.Content>
        </M.Block>
      </M.Container>
    </M.CardMain>
  );
};

export default PopNewCard;

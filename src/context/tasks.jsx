import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../App";

export const TasksContext = createContext(null);

export const TaskProvider = ({ children }) => {
  let navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const getTasks = (cards) => {
    setTasks(cards);
    navigate(AppRoutes.MAIN);
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, getTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

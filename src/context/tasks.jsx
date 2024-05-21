import { createContext, useState } from "react";

export const TasksContext = createContext(null);

export const TaskProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);

  const getTasks = (cards) => {
    setTasks(cards);
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, getTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

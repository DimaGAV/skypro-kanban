import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../App";

function getUserFromLS() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    return null;
  }
}

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  let navigate = useNavigate();
  const [user, setUser] = useState(getUserFromLS);

  function loginUser(newUser) {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate(AppRoutes.LOGIN);
  }

  function logoutUser() {
    setUser(null);
    localStorage.removeItem("user");
    navigate(AppRoutes.LOGIN);
  }

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

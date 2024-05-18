import { createContext, useEffect, useState } from "react";
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

  function isLoginUser(newUser) {
    setUser(newUser);
    // localStorage.setItem("user", JSON.stringify(newUser));
    navigate(AppRoutes.MAIN);
  }

  function logoutUser() {
    setUser(null);
    localStorage.removeItem("user");
    navigate(AppRoutes.LOGIN);
  }

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, isLoginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

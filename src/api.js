export async function getCadrs({ token }) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка получения данных");
  }

  const data = await response.json();
  return data;
}

export async function loginUser({ login, password }) {
  const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error(
      "Введенные Вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
    );
  }

  const data = await response.json();

  return data;
}

export async function registerUser({ name, login, password }) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Такой пользователь уже существует");
  }
  const data = await response.json();

  return data;
}

export async function addNewTask({
  token,
  title,
  topic,
  status,
  description,
  date,
}) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      title,
      topic,
      status,
      description,
      date,
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка добавления данных");
  }

  const data = await response.json();
  return data;
}

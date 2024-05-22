const baseHost = "https://wedev-api.sky.pro/api";
const tasksHost = `${baseHost}/kanban`;
const userHost = `${baseHost}/user`;

export async function getCadrs({ token }) {
  const response = await fetch(tasksHost, {
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
  const response = await fetch(userHost + "/login", {
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
  const response = await fetch(userHost, {
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
  const response = await fetch(tasksHost, {
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
    throw new Error(
      "Введенные данные не корректны! Задача не может быть создана. Пожалуйста, заполните все поля, выбирете категорию и дату выполнения"
    );
  }

  const data = await response.json();
  return data;
}

export async function deleteCadr({ token, id }) {
  const response = await fetch(`${tasksHost}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка удаления данных");
  }

  const data = await response.json();
  return data;
}

export async function updateTask({
  token,
  id,
  status,
  topic,
  description,
  date,
  title,
}) {
  const response = await fetch(`${tasksHost}/${id}`, {
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
    throw new Error(
      "Введенные данные не корректны! Задача не может быть откоректирована"
    );
  }

  const data = await response.json();
  return data;
}

export const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

export const cardList = [
    {
        id: 1,
        topic: "Web Design",
        title: "Название задачи",
        date: "15.05.2024",
        status: statusList[0]
    },
    {
        id: 2,
        topic: "Research",
        title: "Название задачи",
        date: "15.04.2024",
        status: statusList[1]
    },
    {
        id: 3,
        topic: "Copywriting",
        title: "Название задачи",
        date: "15.06.2024",
        status: statusList[2]
    },
    {
        id: 4,
        topic: "Web Design",
        title: "Название задачи",
        date: "15.07.2024",
        status: statusList[3]
    },
    {
        id: 5,
        topic: "Research",
        title: "Название задачи",
        date: "15.07.2024",
        status: statusList[4]
    },
]

export const getTopicColor = (topic) => {
    if (topic === "Web Design") {
        return "_orange";
    } else if (topic === "Research") {
        return "_green";
    } else if (topic === "Copywriting") {
        return "_purple";
    } else {return "_gray"}
  }
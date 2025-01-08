import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import { getTasks, getStatusFilter } from "../../redux/selectors"; // Импортируем селекторы
import css from "./TaskList.module.css";

// Функция для получения задач, соответствующих выбранному фильтру
const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case "active":
      return tasks.filter((task) => !task.completed); // Только активные задачи
    case "completed":
      return tasks.filter((task) => task.completed); // Только завершенные задачи
    default:
      return tasks; // Все задачи
  }
};

export const TaskList = () => {
  // Получаем список всех задач и фильтр из Redux-хранилища
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);

  // Фильтруем задачи в зависимости от выбранного фильтра
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

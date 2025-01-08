// Импортируем хук useSelector из библиотеки react-redux для работы с состоянием Redux.
import { useSelector } from "react-redux";

// Импортируем функцию getTasks из файла с селекторами для получения списка задач.
import { getTasks } from "../../redux/selectors";

// Импортируем стили для компонента TaskCounter.
import css from "./TaskCounter.module.css";

// Определяем функциональный компонент TaskCounter.
export const TaskCounter = () => {
  // Используем хук useSelector для получения задач из состояния Redux.
  const tasks = useSelector(getTasks);

  // Используем reduce для подсчета количества активных и выполненных задач.
  const count = tasks.reduce(
    (acc, task) => {
      // Если задача выполнена, увеличиваем счетчик выполненных задач.
      if (task.completed) {
        acc.completed += 1;
      } else {
        // Если задача активна, увеличиваем счетчик активных задач.
        acc.active += 1;
      }
      // Возвращаем обновленный объект с подсчитанными задачами.
      return acc;
    },
    // Начальное состояние для reduce: обе категории задач (активные и выполненные) равны 0.
    { active: 0, completed: 0 }
  );

  // Возвращаем JSX разметку для отображения количества активных и выполненных задач.
  return (
    <div>
      {/* Отображаем количество активных задач. */}
      <p className={css.text}>Active: {count.active}</p>
      {/* Отображаем количество выполненных задач. */}
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};

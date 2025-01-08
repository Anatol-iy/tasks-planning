// Импортируем хук `useDispatch` для отправки экшенов
import { useDispatch } from "react-redux";

// Импортируем компонент иконки из библиотеки react-icons
import { MdClose } from "react-icons/md";

// Импортируем экшены для удаления задачи и переключения её статуса
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";

// Импортируем стили для компонента
import css from "./Task.module.css";

// Определяем компонент `Task`
export const Task = ({ task }) => {
  // Получаем функцию `dispatch` для отправки экшенов в Redux
  const dispatch = useDispatch();

  // Обработчик удаления задачи
  // Вызывает экшен `deleteTask` с идентификатором задачи
  const handleDelete = () => dispatch(deleteTask(task.id));

  // Обработчик переключения статуса выполнения задачи
  // Вызывает экшен `toggleCompleted` с идентификатором задачи
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    // Обёртка для содержимого задачи с применением класса `wrapper`
    <div className={css.wrapper}>
      {/* Чекбокс для отметки выполнения задачи */}
      <input
        type="checkbox" // Тип элемента — чекбокс
        className={css.checkbox} // Класс для стилизации чекбокса
        checked={task.completed} // Устанавливаем состояние чекбокса в зависимости от свойства `completed`
        onChange={handleToggle} // Вызываем обработчик при изменении состояния
      />
      {/* Текст задачи */}
      <p className={css.text}>{task.text}</p>
      {/* Кнопка удаления задачи */}
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} /> {/* Иконка крестика для кнопки */}
      </button>
    </div>
  );
};

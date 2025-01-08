import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksSlice"; // Импортируем действие для добавления задачи
import css from "./TaskForm.module.css";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    const form = event.target;
    // Генерация уникального id для каждой задачи
    const newTask = {
      id: Date.now(),
      text: form.elements.text.value,
      completed: false,
    };
    // Отправляем действие для добавления новой задачи
    dispatch(addTask(newTask));
    form.reset(); // Очищаем форму
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <button type="submit">Add task</button>
    </form>
  );
};

// Импортируем хук `useSelector` для доступа к состоянию и `useDispatch` для отправки экшенов
import { useSelector, useDispatch } from "react-redux";

// Импортируем компонент кнопки
import { Button } from "../Button/Button";

// Импортируем селектор для получения текущего фильтра из состояния
import { getStatusFilter } from "../../redux/selectors";

// Импортируем экшен для установки нового значения фильтра
import { setStatusFilter } from "../../redux/FiltersSlice";

// Импортируем стили для компонента
import css from "./StatusFilter.module.css";

// Определяем компонент `StatusFilter`
export const StatusFilter = () => {
  // Получаем функцию `dispatch` для отправки экшенов в Redux
  const dispatch = useDispatch();

  // Используем селектор для получения текущего фильтра из состояния Redux
  const filter = useSelector(getStatusFilter);

  // Обработчик изменения фильтра
  // Принимает значение нового фильтра и отправляет экшен `setStatusFilter` с этим значением
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    // Создаём обёртку для кнопок с классом `wrapper`
    <div className={css.wrapper}>
      {/* Кнопка для фильтра "Все" */}
      <Button
        selected={filter === "all"} // Устанавливаем стиль `selected`, если текущий фильтр — "all"
        onClick={() => handleFilterChange("all")} // Вызываем обработчик при клике
      >
        All {/* Текст кнопки */}
      </Button>

      {/* Кнопка для фильтра "Активные" */}
      <Button
        selected={filter === "active"} // Устанавливаем стиль `selected`, если текущий фильтр — "active"
        onClick={() => handleFilterChange("active")} // Вызываем обработчик при клике
      >
        Active {/* Текст кнопки */}
      </Button>

      {/* Кнопка для фильтра "Завершённые" */}
      <Button
        selected={filter === "completed"} // Устанавливаем стиль `selected`, если текущий фильтр — "completed"
        onClick={() => handleFilterChange("completed")} // Вызываем обработчик при клике
      >
        Completed {/* Текст кнопки */}
      </Button>
    </div>
  );
};

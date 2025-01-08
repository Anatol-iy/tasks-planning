import clsx from "clsx"; // Импортируем библиотеку clsx для условного объединения классов
import css from "./Button.module.css"; 

export const Button = ({
  selected = false, // Пропс, указывающий, выбран ли элемент; по умолчанию false
  type = "button", 
  children, // Пропс для передачи содержимого кнопки (текст или другие элементы)
  ...otherProps // Остальные пропсы, переданные компоненту (например, onClick, disabled и т.д.)
}) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected, // Добавляем класс isSelected, если пропс selected равен true
      })}
      type={type} // Устанавливаем тип кнопки, указанный в пропсе type
      {...otherProps} // Передаем остальные пропсы, например события или атрибуты
    >
      {children} {/* Отображаем содержимое кнопки (дети компонента) */}
    </button>
  );
};

import { createSlice } from "@reduxjs/toolkit";

// Функция для загрузки задач из localStorage
const loadTasksFromStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : []; // Если задачи есть, парсим их, если нет — возвращаем пустой массив
};

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: loadTasksFromStorage(), // Загружаем задачи из localStorage при инициализации
  },
  reducers: {
    addTask: (state, action) => {
      // Добавляем новую задачу в список
      state.items.push(action.payload);
      // Сохраняем обновленный список задач в localStorage
      localStorage.setItem("tasks", JSON.stringify(state.items));
    },
    deleteTask: (state, action) => {
      // Удаляем задачу по ID
      state.items = state.items.filter((task) => task.id !== action.payload);
      // Сохраняем обновленный список задач в localStorage
      localStorage.setItem("tasks", JSON.stringify(state.items));
    },
    toggleCompleted: (state, action) => {
      // Меняем статус задачи (выполнена/не выполнена)
      const task = state.items.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      // Сохраняем обновленный список задач в localStorage
      localStorage.setItem("tasks", JSON.stringify(state.items));
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = slice.actions;

export default slice.reducer;

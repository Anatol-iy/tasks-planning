// Импортируем функцию `createSlice` из Redux Toolkit для создания среза состояния
import { createSlice } from "@reduxjs/toolkit";

// Создаем срез (slice) с именем `filters`
const slice = createSlice({
  // Указываем имя среза
  name: "filters",

  // Устанавливаем начальное состояние
  initialState: {
    status: "all", // По умолчанию фильтр задач установлен на "все"
  },

  // Определяем редьюсеры (reducers) — функции для изменения состояния
  reducers: {
    // Редьюсер для установки фильтра по статусу
    setStatusFilter(state, action) {
      // Возвращаем новое состояние с обновленным значением фильтра
      return {
        ...state, // Сохраняем остальные свойства состояния
        status: action.payload, // Обновляем статус фильтра из `action.payload`
      };
    },
  },
});

// Экспортируем действие `setStatusFilter` для использования в компонентах
export const { setStatusFilter } = slice.actions;

// Экспортируем редьюсер среза для добавления в корневой редьюсер
export default slice.reducer;

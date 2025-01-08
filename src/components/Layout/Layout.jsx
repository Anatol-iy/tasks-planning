import css from "./Layout.module.css"; // Импортируем стили из файла Layout.module.css

export const Layout = ({ children }) => {
  // Экспортируем компонент Layout, который принимает пропс children (вложенные элементы)
  return (
    <main className={css.container}>
      {/* Рендерим тег <main> с классом container из CSS */}
      {children}
      {/* Вставляем все переданные дочерние элементы (children) внутрь тега <main> */}
    </main>
  );
};

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Links() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <nav className="text-black p-4 flex items-center justify-between w-full relative">
      {/* Кнопка "Все категории" */}
      <button
        className="p-2 bg-[rgba(104,107,85,1)] text-white rounded-lg flex items-center gap-2 text-[14px]"
        onClick={() => setCategoriesOpen(!categoriesOpen)}
      >
        <Menu />
        <span>Все категории</span>
      </button>

      {/* Выпадающее меню категорий */}
      {categoriesOpen && (
        <div className="absolute top-full left-0 mt-2 bg-[rgba(104,107,85,0.9)] text-white p-3 rounded-lg w-40">
          <a href="#" className="block p-2 hover:bg-[rgba(255,255,255,0.2)]">Категория 1</a>
          <a href="#" className="block p-2 hover:bg-[rgba(255,255,255,0.2)]">Категория 2</a>
          <a href="#" className="block p-2 hover:bg-[rgba(255,255,255,0.2)]">Категория 3</a>
        </div>
      )}

      {/* Кнопка для мобильного меню */}
      <button
        className="lg:hidden p-2 bg-[rgba(104,107,85,1)] text-white rounded-lg flex items-center gap-2 text-[14px]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu />
        <span>Меню</span>
      </button>

      {/* Выпадающее мобильное меню */}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 bg-[rgba(104,107,85,0.9)] text-white p-3 rounded-lg w-40 flex flex-col">
          <a href="#" className="block p-2 hover:bg-[rgba(255,255,255,0.2)]">Главное</a>
          <a href="#" className="block p-2 hover:bg-[rgba(255,255,255,0.2)]">Маркет</a>
          <a href="#" className="block p-2 hover:bg-[rgba(255,255,255,0.2)]">Продукты</a>
          <a href="#" className="block p-2 hover:bg-[rgba(255,255,255,0.2)]">О Нас</a>
          <a href="#" className="block p-2 hover:bg-[rgba(255,255,255,0.2)]">Контакты</a>
        </div>
      )}

      {/* Ссылки (для десктопа) */}
      <div className="hidden lg:flex justify-center gap-6 text-[14px]">
        <a href="#" className="hover:underline">Главное</a>
        <a href="#" className="hover:underline">Маркет</a>
        <a href="#" className="hover:underline">Продукты</a>
        <a href="#" className="hover:underline">О Нас</a>
        <a href="#" className="hover:underline">Контакты</a>
      </div>

      {/* Номер телефона (для десктопа) */}
      <div className="hidden lg:block text-[14px] font-semibold">
        Контакты: +999 999 999
      </div>
    </nav>
  );
}

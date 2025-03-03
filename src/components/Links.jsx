import { Menu } from "lucide-react";

export default function Links() {
  return (
    <nav className="text-black p-4 flex items-center justify-around w-full">
      {/* Кнопка "Все категории" */}
      <button className="p-2 bg-[rgba(104,107,85,1)] text-white rounded-lg flex items-center gap-2 text-[14px]">
        <Menu />
        <span>Все категории</span>
      </button>

      {/* Ссылки */}
      <div className="flex justify-center gap-6 text-lg text-[14px]">
        <a href="#" className="hover:underline">Главное</a>
        <a href="#" className="hover:underline">Маркет</a>
        <a href="#" className="hover:underline">Продукты</a>
        <a href="#" className="hover:underline">О Нас</a>
        <a href="#" className="hover:underline">Контакты</a>
      </div>

      {/* Номер телефона */}
      <div className="text-lg font-semibold text-[14px]">
        Контакты: +999 999 999
      </div>
    </nav>
  );
}

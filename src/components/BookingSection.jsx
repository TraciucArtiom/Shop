import React, { useState } from "react";
import { BookingCard } from "./BookingCard"; // Путь к компоненту с карточкой
import { Button } from "@material-tailwind/react"; // Импортируем Button из библиотеки

export function BookingSection() {
  // Состояние для отображения карточек в зависимости от выбранной категории
  const [category, setCategory] = useState("all");

  // Данные для карточек (пример с теми же карточками для переключения)
  const cards = [
    <BookingCard key="1" />,
    <BookingCard key="2" />,
    <BookingCard key="3" />,
    <BookingCard key="4" />,
    <BookingCard key="5" />,
    <BookingCard key="6" />,
  ];

  // Функция для переключения карточек в зависимости от категории
  const handleButtonClick = (category) => {
    setCategory(category);
  };

  // Фильтрация карточек в зависимости от категории (можно заменить на конкретные карточки для каждой категории)
  const filteredCards = category === "all" ? cards : cards; // Добавьте свою логику фильтрации

  return (
    <section className="p-3">
      {/* Заголовок секции */}
      <div className="text-center mb-8">
        <h1 className="text-6xl font-semibold text-gray-800">Новинки</h1> {/* Увеличен размер шрифта */}
        <p className="text-[14px] text-gray-600 mt-4"> {/* Увеличен размер шрифта */}
          Свежие коллекции постельного белья уже в наличии! Стильные дизайны,<br></br>
          качественные материалы и безупречный комфорт – выбирайте новинки и
          создавайте уют в своем доме.
        </p>
      </div>

      {/* Кнопки для выбора категорий */}
      <div className="text-center mb-8">
        <Button
          size="lg" // Увеличен размер кнопки
          color="blue-gray"
          onClick={() => handleButtonClick("all")}
          className="transition-all duration-300 bg-white text-black hover:bg-black hover:text-white mx-4 py-4 px-6 text-xl" 
        >
          Комплекты
        </Button>
        <Button
          size="lg" // Увеличен размер кнопки
          color="blue-gray"
          onClick={() => handleButtonClick("trend")}
          className="transition-all duration-300 bg-white text-black hover:bg-black hover:text-white mx-4 py-4 px-6 text-xl"  
        >
          Трендовые
        </Button>
        <Button
          size="lg" // Увеличен размер кнопки
          color="blue-gray"
          onClick={() => handleButtonClick("aesthetic")}
          className="transition-all duration-300 bg-white text-black hover:bg-black hover:text-white mx-4 py-4 px-6 text-xl" > 
          Эстетика
        </Button>
        <Button
          size="lg" // Увеличен размер кнопки
          color="blue-gray"
          onClick={() => handleButtonClick("monochrome")}
          className="transition-all duration-300 bg-white text-black hover:bg-black hover:text-white mx-4 py-4 px-6 text-xl"  
        >
          Однотонные
        </Button>
        <Button
          size="lg" // Увеличен размер кнопки
          color="blue-gray"
          onClick={() => handleButtonClick("newStyle")}
          className="transition-all duration-300 bg-white text-black hover:bg-black hover:text-white mx-4 py-4 px-6 text-xl"  
        >
          Новый стиль
        </Button>
      </div>

      {/* Секция с карточками */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 pl-50 px-24">
        {filteredCards}
      </div>
    </section>
  );
}

import React from "react";
import leftImage from "../assets/images/left.png"; // Замените на ваш путь
import rightImage from "../assets/images/right.png"; // Замените на ваш путь
import topImage from "/src/assets/images/top.png"; // Верхнее изображение 425x150
import bottomImage from "/src/assets/images/bottom.png"; // Нижнее изображение 425x150

const UltimateSale = () => {
  return (
    <div className="w-[1280px] h-[485px] flex flex-col items-center justify-between bg-white p-4 mx-auto">
      {/* Верхнее изображение */}
      <img src={topImage} alt="Top" className="w-[425px] h-[150px] object-cover" />

      {/* Основной контейнер с боковыми изображениями */}
      <div className="flex items-center w-full h-full bg-white">
        {/* Левое изображение */}
        <img src={leftImage} alt="Left" className="w-[395px] h-[750px] object-cover" />

        {/* Центральная часть */}
        <div className="flex flex-col items-center justify-center flex-grow bg-white p-8 text-center">
          <h1 className="text-4xl font-bold uppercase text-gray-900">Ultimate Sale</h1>
          <p className="text-lg text-gray-700 mt-2">New Collection</p>
          <button className="mt-4 px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800">
            SHOP NOW
          </button>
        </div>

        {/* Правое изображение */}
        <img src={rightImage} alt="Right" className="w-[395px] h-[750px] object-cover" />
      </div>

      {/* Нижнее изображение */}
      <img src={bottomImage} alt="Bottom" className="w-[425px] h-[150px] object-cover" />
    </div>
  );
};

export default UltimateSale;

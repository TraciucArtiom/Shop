import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-100 p-6 sm:p-12">
      {/* Контейнер с изображениями */}
      <div className="flex justify-center gap-8 mb-8 flex-wrap">
        <img
          src="https://via.placeholder.com/300x300?text=1"
          alt="Bedding 1"
          className="w-32 sm:w-48 md:w-64 lg:w-80 rounded-lg shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300x300?text=2"
          alt="Bedding 2"
          className="w-32 sm:w-48 md:w-64 lg:w-80 rounded-lg shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300x300?text=3"
          alt="Bedding 3"
          className="w-32 sm:w-48 md:w-64 lg:w-80 rounded-lg shadow-lg"
        />
      </div>

      {/* Текстовый блок */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
          ULTIMATE SALE
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          NEW COLLECTION
        </p>

        {/* Кнопка */}
        <a
          href="#"
          className="inline-block bg-[#1c6d36] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#155d2e] transition duration-300"
        >
          SHOP NOW
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

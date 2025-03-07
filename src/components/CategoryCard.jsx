import React, { useState, useEffect } from "react";

const CategoryCard = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    } else {
      setCurrentIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <div
      className="relative w-[350px] h-[500px] overflow-hidden rounded-xl transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Фото с анимацией */}
      <img
        src={images[currentIndex]}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
      />
      
      {/* Заголовок */}
      <div className="absolute bottom-4 left-4 text-white font-bold text-xl bg-black/50 px-3 py-2 rounded-lg">
        {title}
      </div>
    </div>
  );
};

export default CategoryCard;

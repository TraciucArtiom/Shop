import React from "react";  
import leftImage from "../assets/images/left.png";  
import rightImage from "../assets/images/right.png";  
import UltimateSale from "./UltimateSale"; // Импортируем компонент UltimateSale  

const ImageContainer = () => {  
  return (  
    <div className="flex items-center w-full h-full bg-white relative">  
      {/* Левое изображение с уменьшением размера и смещением */}  
      <img  
        src={leftImage}  
        alt="Left"  
        className="w-[345px] h-[585px] object-cover absolute left-35 z-20 rounded-lg max-xl:hidden" // Скрыто на экранах xl и больших  
      />  

      {/* Контейнер с содержимым UltimateSale */}  
      <UltimateSale />  

      {/* Правое изображение с уменьшением размера и смещением */}  
      <img  
        src={rightImage}  
        alt="Right"  
        className="w-[345px] h-[585px] object-cover absolute right-35 z-20 rounded-lg max-xl:hidden" // Скрыто на экранах xl и больших  
      />  
    </div>  
  );  
};  

export default ImageContainer;  
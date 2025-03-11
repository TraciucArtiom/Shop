import React from "react";  
import leftImage from "../assets/images/left.png";  
import rightImage from "../assets/images/right.png";  
import topImage from "/src/assets/images/top.png";  
import bottomImage from "/src/assets/images/bottom.png";  

const UltimateSale = () => {  
  return (  
    <div className="w-full max-w-[780px] h-full flex flex-col items-center bg-white p-4 mx-auto relative overflow-hidden">  
      {/* Верхнее изображение */}  
      <img src={topImage} alt="Top" className="w-[425px] h-[150px]" />  

      {/* Основной контейнер с боковыми изображениями */}  
      <div className="flex items-center w-full h-full bg-white relative z-10 max-xl:flex-col">  
        {/* Центральная часть */}  
        <div className="flex flex-col items-center justify-center flex-grow bg-white p-8 text-center max-w-[300px] mx-auto">  
          <h1 className="text-5xl md:text-6xl font-bold uppercase text-gray-900">Ultimate Sale</h1>  
          <p className="text-lg text-gray-700 mt-2">New Collection</p>  
          <button className="mt-4 px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800">  
            SHOP NOW  
          </button>  
        </div>  
      </div>  
      
      {/* Нижнее изображение */}  
      <img src={bottomImage} alt="Bottom" className="w-[425px] h-[150px] object-cover" />  
    </div>  
  );  
};  

export default UltimateSale;  
import React from 'react';  
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { TbHours24 } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";

const Features = () => {  
    return (  
        <div className="flex justify-around p-4 bg-white shadow-md">  
            <div className="flex flex-col items-center text-center">  
                <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">  
                    {/* Иконка скидки */}  
                    <BsBoxSeam />   
                </svg>  
                <h3 className="text-lg font-medium">Скидка</h3>  
                <p className="text-gray-500">Каждую неделю новые товары</p>  
            </div>  
            <div className="flex flex-col items-center text-center">  
                <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">  
                    {/* Иконка бесплатной доставки */}  
                    <TbTruckDelivery />
                    </svg>  
                <h3 className="text-lg font-medium">Бесплатная Доставка</h3>  
                <p className="text-gray-500">Бесплатно для всех заказов</p>  
            </div>  
            <div className="flex flex-col items-center text-center">  
                <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">  
                    {/* Иконка поддержки 24/7 */}  
                    <TbHours24 />
                </svg>  
                <h3 className="text-lg font-medium">Отличная Поддержка 24/7</h3>  
                <p className="text-gray-500">Мы всегда на связи</p>  
            </div>  
            <div className="flex flex-col items-center text-center">  
                <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">  
                    {/* Иконка безопасного платежа */}  
                    <MdOutlineSecurity />  
                </svg>  
                <h3 className="text-lg font-medium">Безопасный Платеж</h3>  
                <p className="text-gray-500">100% безопасный способ оплаты</p>  
            </div>  
        </div>  
    );  
};  

export default Features;  

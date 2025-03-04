import React from 'react';  

const Features = () => {  
    return (  
        <div className="flex justify-around p-4 bg-white shadow-md">  
            <div className="flex flex-col items-center text-center">  
                <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">  
                    {/* Иконка скидки */}  
                    <path d="M10 3a7 7 0 10.001 14.001A7 7 0 0010 3zm1 11H9v-2h2v2zm0-4H9V7h2v3z" />  
                </svg>  
                <h3 className="text-lg font-medium">Скидка</h3>  
                <p className="text-gray-500">Каждую неделю новые товары</p>  
            </div>  
            <div className="flex flex-col items-center text-center">  
                <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">  
                    {/* Иконка бесплатной доставки */}  
                    <path d="M16 2H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zM4 0h12a4 4 0 014 4v12a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4z" />  
                </svg>  
                <h3 className="text-lg font-medium">Бесплатная Доставка</h3>  
                <p className="text-gray-500">Бесплатно для всех заказов</p>  
            </div>  
            <div className="flex flex-col items-center text-center">  
                <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">  
                    {/* Иконка поддержки 24/7 */}  
                    <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM9 5h2v5h-2V5zm0 7h2v2h-2v-2z" />  
                </svg>  
                <h3 className="text-lg font-medium">Отличная Поддержка 24/7</h3>  
                <p className="text-gray-500">Мы всегда на связи</p>  
            </div>  
            <div className="flex flex-col items-center text-center">  
                <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">  
                    {/* Иконка безопасного платежа */}  
                    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16z" />  
                </svg>  
                <h3 className="text-lg font-medium">Безопасный Платеж</h3>  
                <p className="text-gray-500">100% безопасный способ оплаты</p>  
            </div>  
        </div>  
    );  
};  

export default Features;  

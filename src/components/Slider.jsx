import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/src/assets/shopcard/1.png",
  "/src/assets/shopcard/2.png",
  "/src/assets/shopcard/3.png",
  "/src/assets/shopcard/1.png",
  "/src/assets/shopcard/2.png",
  "/src/assets/shopcard/3.png",
  "/src/assets/shopcard/1.png",
  "/src/assets/shopcard/2.png",
  "/src/assets/shopcard/3.png"
];

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-6">
      <h2 className="text-xl font-bold mb-2">Спешите, пока не поздно!</h2>
      <div className="flex justify-center space-x-4 mb-4 text-center">
        {Object.keys(timeLeft).length ? (
          Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="p-4 bg-white shadow-lg rounded-lg text-gray-800 text-xl font-bold">
              <div>{value}</div>
              <div className="text-sm text-gray-500">{unit}</div>
            </div>
          ))
        ) : (
          <div className="text-red-500 text-xl font-bold">Время вышло!</div>
        )}
      </div>
    </div>
  );
};

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto flex items-center">
      <div className="w-1/3 p-6">
        <h1 className="text-3xl font-bold mb-2">Предложения месяца</h1>
        <p className="text-gray-600 mb-4">
          В этом месяце дарим вам особое предложение — стильные и комфортные комплекты постельного белья по выгодной цене! Не упустите шанс обновить свою спальню и создать атмосферу уюта.
        </p>
        <button className="bg-black text-white py-2 px-4 rounded">Купить Сейчас</button>
        <CountdownTimer targetDate={new Date().setDate(new Date().getDate() + 7)} />
      </div>
      <div className="relative w-2/3 overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
          {images.map((img, index) => (
            <div
              key={index}
              className="w-1/3 px-2 flex-shrink-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={img}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: images.length / 3 }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full bg-gray-400 ${currentIndex / 3 === index ? "bg-gray-800" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

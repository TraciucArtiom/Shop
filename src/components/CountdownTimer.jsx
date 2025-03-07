import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (timeLeft.expired) return;
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  if (timeLeft.expired) {
    return <div className="text-center text-xl font-bold text-red-500">Время вышло!</div>;
  }

  return (
    <div className="flex space-x-4 justify-center items-center mt-4">
      {Object.entries(timeLeft).slice(0, 4).map(([label, value], index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-white text-gray-700 text-3xl font-bold p-4 rounded-lg shadow-md w-20 text-center">
            {value < 10 ? `0${value}` : value}
          </div>
          <span className="text-gray-500 text-sm mt-2">
            {label === "days" ? "Дни" : label === "hours" ? "Часы" : label === "minutes" ? "Минуты" : "Секунды"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;

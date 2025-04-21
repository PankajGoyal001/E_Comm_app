import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate ,classname }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
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
  }, [targetDate]);

  return (
    <div className={`flex gap-[10px] items-center font-poppins font-bold text-[#223263] text-base leading-[150%] tracking-[0.5px] ${classname}`}>
      {/* <span className="bg-[#ffff] p-[8px_11px_9px_9px] px-[11px] rounded-md">{timeLeft.days} </span> */}
      {/* <span className="text-white">:</span> */}
      <span className="bg-[#ffff] p-[8px_11px_9px_9px] px-[11px] rounded-md">{timeLeft.hours} </span>
      <span className="text-white">:</span>
      <span className="bg-[#ffff] p-[8px_11px_9px_9px] px-[11px] rounded-md">{timeLeft.minutes} </span>
      <span className="text-white">:</span>
      <span className="bg-[#ffff] p-[8px_11px_9px_9px] px-[11px] rounded-md">{timeLeft.seconds} </span>
      {/* <span>{timeLeft.seconds}s</span> */}
    </div>
  );
};

export default CountdownTimer;
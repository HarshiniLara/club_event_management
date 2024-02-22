import { useState, useEffect } from "react";

const Countdown = ({ time }) => {
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const targetDate = new Date(time).getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(intervalId);
        setRemainingTime("00:00:00");
      } else {
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 *365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setRemainingTime(`${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div className="flex flex-row bg-[#4A096D] gap-4 items-center justify-evenly rounded-lg border-2  border-gray text-black p-8">
      <div className="p-2 bg-white rounded shadow flex flex-col items-center justify-between align-center text-center">
        <div className="text-2xl font-bold">{remainingTime ? remainingTime.split(":")[0] : "--"}</div>
        <div className="text-sm font-bold">DAYS</div>
      </div>

      <div className="p-2 bg-white rounded shadow flex flex-col items-center justify-between align-center text-center">
        <div className="text-2xl font-bold">{remainingTime ? remainingTime.split(":")[1] : "--"}</div>
        <div className="text-sm font-bold">HOURS</div>
      </div>

      <div className="p-2 bg-white rounded shadow flex flex-col items-center justify-between align-center text-center">
        <div className="text-2xl font-bold">{remainingTime ? remainingTime.split(":")[2] : "--"}</div>
        <div className="text-sm font-bold">MINUTES</div>
      </div>


      <div className="p-2 bg-white rounded shadow flex flex-col items-center justify-between align-center text-center">
        <div className="text-2xl font-bold">{remainingTime ? remainingTime.split(":")[3] : "--"}</div>
        <div className="text-sm font-bold">SECONDS</div>
      </div>


    </div>
  );
};

export default Countdown
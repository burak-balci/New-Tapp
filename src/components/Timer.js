import { useState, useEffect } from "react";

function Timer() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(timer);
    };
  }, [date]);

  const day = date.toLocaleDateString("en", { weekday: "long" });

  const hour = date.getHours();

  const text = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  } `;

  const time = date.toLocaleTimeString("en", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  const a = `${day}, ${date.getDate()} ${date.toLocaleDateString("en", {
    month: "long",
  })}`;

  return (
    <div className="flex flex-col items-center justify-center text-gray-200 font-semibold text-4xl font-lato">
      <div className="flex flex-row gap-x-2 ">
        <div>{a}</div>
        <div>{time}</div>
      </div>
      <div className="flex">{text}</div>
    </div>
  );
}

export default Timer;

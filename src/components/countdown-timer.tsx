"use client";

import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 10,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        }
        if (prevTime.minutes > 0) {
          return { minutes: prevTime.minutes - 1, seconds: 59 };
        }
        // Stop the timer when it reaches zero
        clearInterval(timer);
        return { minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2 md:space-x-4">
      {Object.entries({
        Minutos: timeLeft.minutes,
        Segundos: timeLeft.seconds,
      }).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/20 text-primary shadow-lg backdrop-blur-sm md:h-20 md:w-20">
            <span className="font-headline text-4xl font-bold md:text-5xl">
              {String(value).padStart(2, '0')}
            </span>
          </div>
          <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary/80 md:text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}

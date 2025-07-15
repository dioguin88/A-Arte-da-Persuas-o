"use client";

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  onTimerEnd: () => void;
  isExpired: boolean;
}

export function CountdownTimer({ onTimerEnd, isExpired }: CountdownTimerProps) {
  const initialMinutes = 15;
  const [timeLeft, setTimeLeft] = useState({ minutes: initialMinutes, seconds: 0 });

  useEffect(() => {
    let endTime: number;
    const storedEndTime = localStorage.getItem('offerEndTime');

    if (storedEndTime && parseInt(storedEndTime) > Date.now()) {
      endTime = parseInt(storedEndTime);
    } else {
      endTime = Date.now() + initialMinutes * 60 * 1000;
      localStorage.setItem('offerEndTime', String(endTime));
    }
    
    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);

      const newTimeLeft = {
        minutes: Math.floor((remaining / 1000 / 60) % 60),
        seconds: Math.floor((remaining / 1000) % 60),
      };

      setTimeLeft(newTimeLeft);

      if (remaining === 0) {
        clearInterval(timer);
        if (!isExpired) {
          onTimerEnd();
        }
      }
    }, 1000);

    // Set initial time immediately
    const initialRemaining = Math.max(0, endTime - Date.now());
    setTimeLeft({
      minutes: Math.floor((initialRemaining / 1000 / 60) % 60),
      seconds: Math.floor((initialRemaining / 1000) % 60),
    });
    
    if (initialRemaining === 0 && !isExpired) {
      onTimerEnd();
    }

    return () => clearInterval(timer);
  }, [isExpired, onTimerEnd]);


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

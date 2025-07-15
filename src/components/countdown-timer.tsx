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

    const setupTimer = () => {
      // Always reset the timer on a new visit/page load.
      endTime = Date.now() + initialMinutes * 60 * 1000;
      localStorage.setItem('countdownEndTime', String(endTime));
    };

    const calculateTimeLeft = () => {
      // Retrieve endTime at the moment of calculation to ensure it's the most current.
      const savedEndTime = localStorage.getItem('countdownEndTime');
      const currentEndTime = savedEndTime ? parseInt(savedEndTime, 10) : Date.now();
      const remaining = Math.max(0, currentEndTime - Date.now());
      return {
        minutes: Math.floor((remaining / 1000 / 60) % 60),
        seconds: Math.floor((remaining / 1000) % 60),
      };
    };

    // Setup a new timer when the component mounts.
    setupTimer();
    
    // Set initial time immediately
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
        const newTimeLeft = calculateTimeLeft();
        setTimeLeft(newTimeLeft);

        if (newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
            clearInterval(timer);
            if (!isExpired) {
                onTimerEnd();
            }
        }
    }, 1000);

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

"use client";

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  onTimerEnd: () => void;
  isExpired: boolean;
}

export function CountdownTimer({ onTimerEnd, isExpired }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ minutes: 10, seconds: 0 });

  useEffect(() => {
    // Initialize state from localStorage only on the client
    const savedTime = localStorage.getItem('countdownEndTime');
    let endTime;

    if (savedTime) {
      endTime = parseInt(savedTime, 10);
    } else {
      endTime = Date.now() + 10 * 60 * 1000;
      localStorage.setItem('countdownEndTime', String(endTime));
    }

    const calculateTimeLeft = () => {
      const remaining = Math.max(0, endTime - Date.now());
      return {
        minutes: Math.floor((remaining / 1000 / 60) % 60),
        seconds: Math.floor((remaining / 1000) % 60),
      };
    };

    const remainingTime = calculateTimeLeft();
    setTimeLeft(remainingTime);

    if (remainingTime.minutes === 0 && remainingTime.seconds === 0 && !isExpired) {
        onTimerEnd();
    }
  }, [isExpired, onTimerEnd]);

  useEffect(() => {
    if (isExpired) {
      setTimeLeft({ minutes: 0, seconds: 0 });
      return;
    }

    const timer = setInterval(() => {
        const savedTime = localStorage.getItem('countdownEndTime');
        if(!savedTime) {
            clearInterval(timer);
            onTimerEnd();
            return;
        }

        const endTime = parseInt(savedTime, 10);
        const remaining = Math.max(0, endTime - Date.now());

        if (remaining === 0) {
            clearInterval(timer);
            onTimerEnd();
            setTimeLeft({ minutes: 0, seconds: 0 });
        } else {
            setTimeLeft({
                minutes: Math.floor((remaining / 1000 / 60) % 60),
                seconds: Math.floor((remaining / 1000) % 60),
            });
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

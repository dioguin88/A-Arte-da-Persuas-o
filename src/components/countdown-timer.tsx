"use client";

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  onTimerEnd: () => void;
  isExpired: boolean;
}

export function CountdownTimer({ onTimerEnd, isExpired }: CountdownTimerProps) {
  const initialMinutes = 15;
  const [timeLeft, setTimeLeft] = useState({ minutes: initialMinutes, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    let endTime: number;
    const storedEndTime = localStorage.getItem('offerEndTime');

    if (storedEndTime && parseInt(storedEndTime) > Date.now()) {
      endTime = parseInt(storedEndTime);
    } else {
      endTime = Date.now() + initialMinutes * 60 * 1000;
      localStorage.setItem('offerEndTime', String(endTime));
    }
    
    const updateTimer = () => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);

      const newTimeLeft = {
        minutes: Math.floor((remaining / 1000 / 60) % 60),
        seconds: Math.floor((remaining / 1000) % 60),
      };

      setTimeLeft(newTimeLeft);

      if (remaining === 0) {
        if (!isExpired) {
          onTimerEnd();
        }
        clearInterval(timer);
      }
    };

    updateTimer(); // Set initial time immediately
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [isClient, isExpired, onTimerEnd]);

  const renderTimerBox = (value: number, label: string) => (
    <div key={label} className="flex flex-col items-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-black/50 text-red-500 shadow-lg backdrop-blur-sm md:h-24 md:w-24" style={{ textShadow: '0 0 8px #ff4444' }}>
        <span className="font-headline text-5xl font-bold md:text-6xl">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary/80 md:text-sm">{label}</span>
    </div>
  );

  if (!isClient) {
    // Render a placeholder on the server
    return (
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        {renderTimerBox(initialMinutes, 'Minutos')}
        {renderTimerBox(0, 'Segundos')}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center space-x-2 md:space-x-4">
      {renderTimerBox(timeLeft.minutes, 'Minutos')}
      {renderTimerBox(timeLeft.seconds, 'Segundos')}
    </div>
  );
}

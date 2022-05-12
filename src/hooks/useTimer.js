import { useEffect, useState } from 'react';

export const useTimer = (startTime, expireTime) => {
  const [timer, setTimer] = useState(startTime || 30);
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (timer === expireTime) {
        setIsTimerExpired(true);
        setTimer(startTime);
      } else {
        setIsTimerExpired(false);
        setTimer(timer - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [timer, isTimerExpired, expireTime, startTime]);

  const handleExpireTimer = (value) => setIsTimerExpired(value);
  return [timer, isTimerExpired, handleExpireTimer];
};

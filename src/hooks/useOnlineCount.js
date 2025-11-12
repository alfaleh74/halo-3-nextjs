import { useState, useEffect } from 'react';
import { getRandomOnlineCount } from '../app/data/halo3-data';

/**
 * Custom hook to manage and update online player count
 * @param {number} interval - Update interval in milliseconds (default: 10000)
 * @param {number} initialCount - Initial count value (default: 1328)
 */
export function useOnlineCount(interval = 10000, initialCount = 1328) {
  const [onlineCount, setOnlineCount] = useState(initialCount);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOnlineCount(getRandomOnlineCount());
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  return onlineCount;
}


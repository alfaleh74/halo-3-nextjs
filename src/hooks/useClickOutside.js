import { useEffect } from 'react';

/**
 * Custom hook to detect clicks outside of specified element refs
 * @param {Array} refs - Array of React refs to monitor
 * @param {Function} handler - Callback function to execute when click is outside
 */
export function useClickOutside(refs, handler) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside all provided refs
      const isOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target)
      );

      if (isOutside) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [refs, handler]);
}


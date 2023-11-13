// useWindow.ts
import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

const useWindow = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Subscribe to window resize events
    window.addEventListener('resize', handleResize);

    // Initial cleanup function
    return () => {
      // Unsubscribe from window resize events when the component is unmounted
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once during component mount

  return windowSize;
};

export default useWindow;

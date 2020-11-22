import { useEffect, useState } from 'react';

export const useTabbing = (): boolean => {
  const [isTabbing, setIsTabbing] = useState(false);

  const handleFirstTab = (e: any) => {
    if (e.keyCode === 9) {
      setIsTabbing(true);
      window.removeEventListener('keydown', handleFirstTab);
      window.addEventListener('mousedown', handleMouseDownOnce);
    }
  };

  const handleMouseDownOnce = () => {
    setIsTabbing(false);
    window.removeEventListener('mousedown', handleMouseDownOnce);
    window.addEventListener('keydown', handleFirstTab);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab);

    return () => {
      window.removeEventListener('keydown', handleFirstTab);
      isTabbing && window.removeEventListener('mousedown', handleMouseDownOnce);
    };
  }, []);

  return isTabbing;
};

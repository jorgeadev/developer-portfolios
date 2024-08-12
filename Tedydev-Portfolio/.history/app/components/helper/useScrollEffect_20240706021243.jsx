// app/components/helper/useScrollEffect.jsx
import { useEffect, useState } from 'react';

export const useScrollVisibility = (selector) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(selector);
      if (element) {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const threshold = 0.5; // Ngưỡng 50% vị trí

        if (rect.top <= viewportHeight * threshold) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selector]);

  return isVisible;
};
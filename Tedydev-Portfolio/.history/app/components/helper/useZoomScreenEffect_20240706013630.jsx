import { useEffect } from 'react';

const useZoomScreenEffect = () => {
  useEffect(() => {
    const adjustZoom = () => {
      const screenWidthInInches = window.screen.width / window.devicePixelRatio / 96;
      if (screenWidthInInches >= 27) {
        document.body.style.zoom = '150%';
      } else {
        document.body.style.zoom = '100%';
      }
    };

    adjustZoom();
    window.addEventListener('resize', adjustZoom);

    return () => {
      window.removeEventListener('resize', adjustZoom);
    };
  }, []);
};

export default useZoomScreenEffect;
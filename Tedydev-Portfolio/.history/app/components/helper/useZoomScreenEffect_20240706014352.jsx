import { useEffect } from 'react';

const useZoomScreenEffect = () => {
	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.screen.width;
			const screenHeight = window.screen.height;
			const screenSizeInInches =
				Math.sqrt(screenWidth ** 2 + screenHeight ** 2) / 96;

			if (screenSizeInInches >= 27) {
				document.body.style.zoom = '150%';
			} else {
				document.body.style.zoom = '100%';
			}
		};

		handleResize(); // Call once on mount
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
};

export default useZoomScreenEffect;

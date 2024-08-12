'use client';

import { useEffect, useState } from 'react';

export const useScrollVisibility = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const groups = document.querySelectorAll('.group');
			groups.forEach((group) => {
				const rect = group.getBoundingClientRect();
				const viewportHeight =
					window.innerHeight || document.documentElement.clientHeight;
				const threshold = 0.5; // Ngưỡng 50% vị trí

				if (rect.top <= viewportHeight * threshold) {
					const groupHover = group.querySelector('.group-hover');
					if (groupHover) {
						setIsVisible(true);
					}
				} else {
					const groupHover = group.querySelector('.group-hover');
					if (groupHover) {
						setIsVisible(false);
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return isVisible;
};

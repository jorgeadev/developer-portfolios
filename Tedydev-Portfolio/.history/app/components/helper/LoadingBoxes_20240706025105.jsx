'use client';
import React, { useState, useEffect } from 'react';
import 'animate.css';
import '../../css/globals.scss';

const LoadingBoxes = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 1800); // 3s for animation + 1s delay

		return () => clearTimeout(timer);
	}, []);

	if (!isVisible) return null;

	return (
		<div className=''>
			<div className='box1 loading animate__animated animate__backOutLeft'>
				T
			</div>
			<div className='box2 loading animate__animated animate__backOutLeft'>
				E
			</div>
			<div className='box3 loading animate__animated animate__backOutLeft'>
				D
			</div>
			<div className='box4 loading animate__animated animate__backOutLeft'>
				Y
			</div>
		</div>
	);
};

export default LoadingBoxes;

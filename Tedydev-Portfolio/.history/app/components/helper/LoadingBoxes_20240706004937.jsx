'use client';

import React from 'react';
import 'animate.css';
import '../../css/globals.scss';

const LoadingBoxes = () => {
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

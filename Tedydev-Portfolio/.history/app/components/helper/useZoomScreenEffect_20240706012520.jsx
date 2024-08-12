'use client';
import { useEffect, useState } from 'react';

const useZoomScreenEffect = () => {
	useEffect(() => {
		const adjustZoom = () => {
			const screenWidthInInches =
				window.screen.width / window.devicePixelRatio / 96;
			if (screenWidthInInches >= 27) {
				document.body.style.zoom = '200%';
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


import React from 'react';
import 'animate.css';
import "../../css/globals.scss";

const useZoomScreenEffect = () => {
  return (
    <div className="">
      <div className="box1 loading animate__animated animate__backOutLeft">
        T
      </div>
      <div className="box2 loading animate__animated animate__backOutLeft">
        E
      </div>
      <div className="box3 loading animate__animated animate__backOutLeft">
        D
      </div>
      <div className="box4 loading animate__animated animate__backOutLeft">
        Y
      </div>
      </div>
  );
};

export default useZoomScreenEffect;
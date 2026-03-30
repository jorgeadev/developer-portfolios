"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const AnimationLottie = ({ jsonPath, width }) => {
	const [animationData, setAnimationData] = useState(null);

	useEffect(() => {
		fetch(jsonPath)
			.then((response) => response.json())
			.then((data) => setAnimationData(data))
			.catch((error) => console.error("Error loading Lottie animation:", error));
	}, [jsonPath]);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		style: {
			width: "95%",
		},
	};

	if (!animationData) {
		return null; // Or a loading spinner
	}

	return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;

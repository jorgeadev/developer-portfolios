"use client";

import { useEffect, useRef } from "react";
import AnimationLottie from "../../helper/animation-lottie";
import experience from "/public/lottie/code.json";

function AnimationElement() {
  const animationRef = useRef(null);

  useEffect(() => {
    const animationElement = animationRef.current;
    if (animationElement) {
      const parentElement = animationElement.parentElement;
      if (parentElement) {
        parentElement.style.display = "flex";
        parentElement.style.justifyContent = "center";
        parentElement.style.alignItems = "center";
      }
    }
  }, []);

  return (
    <div className="w-full h-full" ref={animationRef}>
      <AnimationLottie animationPath={experience} />
    </div>
  );
}

export default AnimationElement;

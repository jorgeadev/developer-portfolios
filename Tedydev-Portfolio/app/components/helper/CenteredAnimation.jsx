"use client";
import { useRef } from "react";
import AnimationLottie from "./animation-lottie";
import experience from "/public/lottie/study.json";

const CenteredAnimation = () => {
  const animationRef = useRef(null);

  return (
    <div
      className="flex justify-center items-center"
      style={{
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "999",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={animationRef}
    >
      <AnimationLottie animationPath={experience} />
    </div>
  );
};

export default CenteredAnimation;

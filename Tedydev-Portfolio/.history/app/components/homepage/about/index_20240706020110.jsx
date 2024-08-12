import { useEffect, useState, useRef } from "react";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  const [isLightActive, setIsLightActive] = useState(false);
  const lightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLightActive(true);
        } else {
          setIsLightActive(false);
        }
      },
      { threshold: 0.5 }
    );

    if (lightRef.current) {
      observer.observe(lightRef.current);
    }

    return () => {
      if (lightRef.current) {
        observer.unobserve(lightRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="avt-container">
          <div className={`light-button ${isLightActive ? 'active' : ''}`} ref={lightRef}>
            <button className="bt">
              <div className="light-holder">
                <div className="dot"></div>
                <div className="light"></div>
              </div>
            </button>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src={personalData.profile}
              width={280}
              height={280}
              alt="Tedy Dev"
              className="avt"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
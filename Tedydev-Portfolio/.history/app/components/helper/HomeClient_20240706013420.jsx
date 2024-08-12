"use client";

import { useEffect } from 'react';
import LoadingBoxes from './components/helper/LoadingBoxes';
import HeroSection from './components/homepage/hero-section';
import AboutSection from './components/homepage/about';
import Experience from './components/homepage/experience';
import Skills from './components/homepage/skills';
import Projects from './components/homepage/projects';
import Education from './components/homepage/education';
import Blog from './components/homepage/blog';
import ContactSection from './components/homepage/contact';

const useZoomScreenEffect = () => {
    useEffect(() => {
        const adjustZoom = () => {
            const screenWidthInInches =
                window.screen.width / window.devicePixelRatio / 96;
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

export default function HomeClient({ blogs }) {
    useZoomScreenEffect();

    return (
        <>
            <LoadingBoxes />
            <HeroSection />
            <AboutSection />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Blog blogs={blogs} />
            <ContactSection />
        </>
    );
}
import { useEffect } from 'react';
import { personalData } from '@/utils/data/personal-data';
import AboutSection from './components/homepage/about';
import LoadingBoxes from './components/helper/LoadingBoxes';
import Blog from './components/homepage/blog';
import ContactSection from './components/homepage/contact';
import Education from './components/homepage/education';
import Experience from './components/homepage/experience';
import HeroSection from './components/homepage/hero-section';
import Projects from './components/homepage/projects';
import Skills from './components/homepage/skills';
import { Analytics } from '@vercel/analytics/react';

function adjustZoom() {
	if (window.screen.width >= 2560) {
		document.body.style.zoom = '150%';
	} else {
		document.body.style.zoom = '100%';
	}
}

export default async function Home() {
	useEffect(() => {
		adjustZoom();
		window.addEventListener('resize', adjustZoom);

		return () => {
			window.removeEventListener('resize', adjustZoom);
		};
	}, []);

	const blogs = await getData();

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

async function getData() {
	const res = await fetch(
		`https://dev.to/api/articles?username=${personalData.devUsername}`,
	);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const data = await res.json();

	const filtered = data
		.filter((item) => item?.cover_image)
		.sort(() => Math.random() - 0.5);

	return filtered;
}

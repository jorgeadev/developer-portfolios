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

export default async function Home() {
	const blogs = await getData();
	const

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

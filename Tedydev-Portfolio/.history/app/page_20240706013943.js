import ZoomWrapper from './components/ZoomWrapper';
import { personalData } from '@/utils/data/personal-data';
import LoadingBoxes from './components/helper/LoadingBoxes';
import HeroSection from './components/homepage/hero-section';
import AboutSection from './components/homepage/about';
import Experience from './components/homepage/experience';
import Skills from './components/homepage/skills';
import Projects from './components/homepage/projects';
import Education from './components/homepage/education';
import Blog from './components/homepage/blog';
import ContactSection from './components/homepage/contact';

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

export default async function Home() {
	const blogs = await getData();

	return (
		<ZoomWrapper>
			<LoadingBoxes />
			<HeroSection />
			<AboutSection />
			<Experience />
			<Skills />
			<Projects />
			<Education />
			<Blog blogs={blogs} />
			<ContactSection />
		</ZoomWrapper>
	);
}

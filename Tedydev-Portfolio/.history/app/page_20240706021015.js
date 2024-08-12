'use client';
import { useState, useEffect } from 'react';
import { personalData } from '@/utils/data/personal-data';
import AboutSection from './components/homepage/about'; // Ensure this path is correct
import LoadingBoxes from './components/helper/LoadingBoxes';
import Blog from './components/homepage/blog';
import ContactSection from './components/homepage/contact';
import Education from './components/homepage/education';
import Experience from './components/homepage/experience';
import HeroSection from './components/homepage/hero-section';
import Projects from './components/homepage/projects';
import Skills from './components/homepage/skills';
import { Analytics } from '@vercel/analytics/react';
import 'animate.css';

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

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		getData().then((data) => {
			setBlogs(data);
			setLoading(false);
		});
	}, []);

	return (
		<>
			{loading && (
				<LoadingBoxes className='box loading animate__animated animate__backOutLeft' />
			)}
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

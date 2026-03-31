"use client";

import dynamic from "next/dynamic";
import SectionTitle from "../helper/section-title";

const GitHubCalendar = dynamic(
	() => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
	{ ssr: false }
);

function Contributions() {
	return (
		<div id="contributions" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
			<SectionTitle title="Activity Graph" />

			<div className="w-full flex justify-center py-12">
				<GitHubCalendar username="said7388" blockSize={14} />
			</div>
		</div>
	);
}

export default Contributions;

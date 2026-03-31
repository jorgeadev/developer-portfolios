import React, { useContext } from "react";
const Fade = ({ children }) => <>{children}</>;

import { ThemeContext } from "../../contexts/ThemeContext";

import expImgWhite from "../../assets/svg/experience/expImgWhite.svg";
import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";

import "./Experience.css";

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
	const { theme } = useContext(ThemeContext);

	return (
		<Fade bottom>
			<div
				key={id}
				className="experience-card"
				style={{ "--card-bg": theme.primary30, "--card-bg-hover": theme.primary50 }}
			>
				<div className="expcard-img" style={{ backgroundColor: theme.primary }}>
					<img src={theme.type === "light" ? expImgBlack : expImgWhite} alt="" />
				</div>
				<div className="experience-details">
					<h6 style={{ color: theme.primary }}>
						{startYear}-{endYear}
					</h6>
					<h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
					<h5 style={{ color: theme.tertiary80 }}>{company}</h5>
				</div>
			</div>
		</Fade>
	);
}

export default ExperienceCard;

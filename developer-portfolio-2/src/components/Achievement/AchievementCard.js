import React, { useContext } from "react";
const Fade = ({ children }) => <>{children}</>;

import { ThemeContext } from "../../contexts/ThemeContext";

import { AiOutlineFolder } from "react-icons/ai";

import "./Achievement.css";

function AchievementCard({ id, title, details, date, field, image }) {
	const { theme } = useContext(ThemeContext);

	return (
		<Fade bottom>
			<div
				key={id}
				className="achievement-card"
				style={{ "--card-bg": theme.primary30, "--card-bg-hover": theme.primary50 }}
			>
				<div className="achievecard-content">
					<div className="achievecard-details1">
						<h2 style={{ color: theme.tertiary }}>{title}</h2>
						<p style={{ color: theme.tertiary80 }}>{details}</p>
					</div>
					<div className="achievecard-details2" style={{ color: theme.primary }}>
						<h5>{date}</h5>
						<div className="achievecard-field">
							<AiOutlineFolder />
							<h5>{field}</h5>
						</div>
					</div>
				</div>
				<div className="achievecard-imgcontainer">
					<img src={image} alt="" />
				</div>
			</div>
		</Fade>
	);
}

export default AchievementCard;

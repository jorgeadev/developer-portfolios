import React from "react";
import { styled } from "@mui/material/styles";
import { FaPlay, FaCode } from "react-icons/fa";
import Fade from "react-reveal/Fade";

import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
	const IconBtn = styled("a")(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: 40,
		height: 40,
		borderRadius: 50,
		border: `2px solid ${theme.tertiary}`,
		color: theme.tertiary,
		transition: "all 0.2s",
		"&:hover": {
			backgroundColor: theme.secondary,
			color: theme.primary,
			transform: "scale(1.1)",
			border: `2px solid ${theme.secondary}`,
		},
	}));

	const StyledIcon = styled("div")(({ theme }) => ({
		fontSize: "1.1rem",
		transition: "all 0.2s",
		"&:hover": {},
	}));

	return (
		<Fade bottom>
			<div key={id} className="singleProject" style={{ backgroundColor: theme.primary400 }}>
				<div className="projectContent">
					<h2 id={name.replace(" ", "-").toLowerCase()} style={{ color: theme.tertiary }}>
						{name}
					</h2>
					<img src={image ? image : placeholder} alt={name} />
					<div className="project--showcaseBtn">
						<IconBtn
							href={demo}
							target="_blank"
							rel="noreferrer"
							aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
								.replace(" ", "-")
								.toLowerCase()}-demo`}
						>
							<FaPlay
								id={`${name.replace(" ", "-").toLowerCase()}-demo`}
								style={{ fontSize: "1.1rem" }}
								aria-label="Demo"
							/>
						</IconBtn>
						<IconBtn
							href={code}
							target="_blank"
							rel="noreferrer"
							aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
								.replace(" ", "-")
								.toLowerCase()}-code`}
						>
							<FaCode
								id={`${name.replace(" ", "-").toLowerCase()}-code`}
								style={{ fontSize: "1.1rem" }}
								aria-label="Code"
							/>
						</IconBtn>
					</div>
				</div>
				<p
					className="project--desc"
					style={{
						background: theme.secondary,
						color: theme.tertiary,
					}}
				>
					{desc}
				</p>
				<div
					className="project--lang"
					style={{
						background: theme.secondary,
						color: theme.tertiary80,
					}}
				>
					{tags.map((tag, id) => (
						<span key={id}>{tag}</span>
					))}
				</div>
			</div>
		</Fade>
	);
}

export default SingleProject;

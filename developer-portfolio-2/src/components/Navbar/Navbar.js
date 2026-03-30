import React, { useContext, useState } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";
import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { FaUser, FaFolderOpen } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

import "./Navbar.css";
import { headerData } from "../../data/headerData";
import { ThemeContext } from "../../contexts/ThemeContext";

function Navbar() {
	const { theme, setHandleDrawer } = useContext(ThemeContext);

	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
		setHandleDrawer();
	};

	const handleDrawerClose = () => {
		setOpen(false);
		setHandleDrawer();
	};

	const drawerPaperSx = {
		padding: "0em 1.8em",
		width: "14em",
		fontFamily: "var(--primaryFont)",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: "24px",
		background: theme.secondary,
		overflow: "hidden",
		borderTopRightRadius: "40px",
		borderBottomRightRadius: "40px",
		"@media (max-width: 600px)": {
			width: "12em",
		},
	};

	const drawerItemStyle = {
		"--item-bg": theme.secondary,
		"--item-color": theme.primary,
		"--item-border": theme.primary,
		"--item-bg-hover": theme.primary,
		"--item-color-hover": theme.secondary,
	};

	const shortname = (name) => {
		if (name.length > 12) {
			return name.split(" ")[0];
		} else {
			return name;
		}
	};

	return (
		<div className="navbar">
			<div className="navbar--container">
				<h1 style={{ color: theme.secondary }}>{shortname(headerData.name)}</h1>

				<IoMenuSharp
					className="nav-menu-icon"
					style={{
						"--menu-color": theme.tertiary,
						"--menu-color-hover": theme.primary,
					}}
					onClick={handleDrawerOpen}
					aria-label="Menu"
				/>
			</div>
			<Drawer
				variant="temporary"
				onClose={(event, reason) => {
					if (reason !== "backdropClick") {
						handleDrawerClose();
					} else if (reason !== "escapeKeyDown") {
						handleDrawerClose();
					}
				}}
				anchor="left"
				open={open}
				PaperProps={{ sx: drawerPaperSx }}
				className="drawer"
				disableScrollLock={true}
			>
				<div className="div-closebtn">
					<CloseIcon
						onClick={handleDrawerClose}
						onKeyDown={(e) => {
							if (e.key === " " || e.key === "Enter") {
								e.preventDefault();
								handleDrawerClose();
							}
						}}
						className="close-btn-icon"
						sx={{
							fontSize: "2rem",
							fontWeight: "bold",
							cursor: "pointer",
							color: theme.primary,
							position: "absolute",
							right: { xs: 20, sm: 40 },
							top: { xs: 20, sm: 40 },
							transition: "color 0.2s",
							"&:hover": {
								color: theme.tertiary,
							},
						}}
						role="button"
						tabIndex="0"
						aria-label="Close"
					/>
				</div>
				<br />

				<div onClick={handleDrawerClose}>
					<div className="navLink--container">
						<Fade left>
							<NavLink to="/" smooth={true} spy="true" duration={2000}>
								<div className="drawer-item" style={drawerItemStyle}>
									<IoHomeSharp className="drawer-icon" />
									<span className="drawer-links">Home</span>
								</div>
							</NavLink>
						</Fade>

						<Fade left>
							<NavLink to="/#about" smooth={true} spy="true" duration={2000}>
								<div className="drawer-item" style={drawerItemStyle}>
									<FaUser className="drawer-icon" />
									<span className="drawer-links">About</span>
								</div>
							</NavLink>
						</Fade>

						<Fade left>
							<NavLink to="/#resume" smooth={true} spy="true" duration={2000}>
								<div className="drawer-item" style={drawerItemStyle}>
									<HiDocumentText className="drawer-icon" />
									<span className="drawer-links">Resume</span>
								</div>
							</NavLink>
						</Fade>

						<Fade left>
							<NavLink to="/#services" smooth={true} spy="true" duration={2000}>
								<div className="drawer-item" style={drawerItemStyle}>
									<BsFillGearFill className="drawer-icon" />
									<span className="drawer-links">Services</span>
								</div>
							</NavLink>
						</Fade>

						<Fade left>
							<NavLink to="/#blog" smooth={true} spy="true" duration={2000}>
								<div className="drawer-item" style={drawerItemStyle}>
									<FaFolderOpen className="drawer-icon" />
									<span className="drawer-links">Blog</span>
								</div>
							</NavLink>
						</Fade>

						<Fade left>
							<NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
								<div className="drawer-item" style={drawerItemStyle}>
									<MdPhone className="drawer-icon" />
									<span className="drawer-links">Contact</span>
								</div>
							</NavLink>
						</Fade>
					</div>
				</div>
			</Drawer>
		</div>
	);
}

export default Navbar;

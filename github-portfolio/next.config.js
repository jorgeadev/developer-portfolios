const path = require("path");

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		remotePatterns: [
			{ hostname: "media.dev.to" },
			{ hostname: "avatars.githubusercontent.com" },
			{ hostname: "github-readme-stats.vercel.app" },
			{ hostname: "github-readme-streak-stats.herokuapp.com" },
			{ hostname: "stardev.io" },
			{ hostname: "github-profile-summary-cards.vercel.app" },
			{ hostname: "github-profile-trophy.vercel.app" },
		],
		dangerouslyAllowSVG: true,
	},
};

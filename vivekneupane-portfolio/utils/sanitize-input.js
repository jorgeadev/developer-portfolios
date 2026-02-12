export function sanitizeInput(input) {
	if (typeof input !== "string") {
		return "";
	}
  
	// Remove HTML tags and encode special characters to prevent XSS
	return input
		.replace(/[<>]/g, "") // Remove angle brackets
		.replace(/[&]/g, "&amp;") // Encode ampersands
		.replace(/["']/g, "") // Remove quotes
		.trim(); // Remove leading/trailing whitespace
}

export function sanitizeContactForm(formData) {
	return {
		name: sanitizeInput(formData.name),
		email: sanitizeInput(formData.email),
		message: sanitizeInput(formData.message)
	};
}
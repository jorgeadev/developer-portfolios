import axios from "axios";
import { NextResponse } from "next/server";

// Simple input sanitization to prevent XSS
function sanitizeInput(input) {
	if (typeof input !== "string") return "";
	return input.replace(/[<>]/g, "").replace(/[&]/g, "&amp;").trim();
}

// Validate input lengths to prevent DoS
function validateInputLengths(payload) {
	const maxNameLength = 100;
	const maxEmailLength = 100;
	const maxMessageLength = 1000;

	return (
		payload.name &&
		payload.name.length <= maxNameLength &&
		payload.email &&
		payload.email.length <= maxEmailLength &&
		payload.message &&
		payload.message.length <= maxMessageLength
	);
}

export async function POST(request) {
	const payload = await request.json();

	// Validate input lengths
	if (!validateInputLengths(payload)) {
		return NextResponse.json(
			{
				success: false,
				message: "Input validation failed",
			},
			{ status: 400 }
		);
	}

	// Sanitize inputs
	const sanitizedPayload = {
		name: sanitizeInput(payload.name),
		email: sanitizeInput(payload.email),
		message: sanitizeInput(payload.message),
	};

	const token = process.env.TELEGRAM_BOT_TOKEN;
	const chat_id = process.env.TELEGRAM_CHAT_ID;

	if (!token || !chat_id) {
		return NextResponse.json(
			{
				success: false,
			},
			{ status: 200 }
		);
	}

	try {
		const url = `https://api.telegram.org/bot${token}/sendMessage`;
		const message = `New message from ${sanitizedPayload.name}\n\nEmail: ${sanitizedPayload.email}\n\nMessage:\n ${sanitizedPayload.message}\n\n`;

		const res = await axios.post(url, {
			text: message,
			chat_id: process.env.TELEGRAM_CHAT_ID,
		});

		if (res.data.ok) {
			return NextResponse.json(
				{
					success: true,
					message: "Message sent successfully!",
				},
				{ status: 200 }
			);
		}
	} catch (error) {
		console.log("Failed to send message");
		return NextResponse.json(
			{
				message: "Message sending failed!",
				success: false,
			},
			{ status: 500 }
		);
	}
}

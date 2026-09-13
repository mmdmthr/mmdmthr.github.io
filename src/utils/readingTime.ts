/**
 * Calculate reading time based on word count
 * Uses standard reading speed of ~200 words per minute
 */
export function calculateReadingTime(text: string): {
	minutes: number;
	display: string;
} {
	const wordsPerMinute = 200;
	const wordCount = countWords(text);
	const minutes = Math.ceil(wordCount / wordsPerMinute);

	let display: string;
	if (minutes < 1) {
		display = 'Less than a minute';
	} else if (minutes === 1) {
		display = '1 minute read';
	} else {
		display = `${minutes} minute read`;
	}

	return { minutes, display };
}

/**
 * Count words in text by splitting on whitespace
 * Removes HTML tags first
 */
function countWords(text: string): number {
	// Remove HTML tags
	const cleanText = text.replace(/<[^>]*>/g, '');
	// Split on whitespace and filter empty strings
	const words = cleanText
		.split(/\s+/)
		.filter((word) => word.length > 0);
	return words.length;
}

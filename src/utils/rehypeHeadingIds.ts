import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';
import type { Node } from 'unist';

/**
 * Generates a URL-friendly ID from text
 * Ensures IDs are lowercase, replace spaces and special chars with hyphens
 */
function generateId(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^\w\s-]/g, '') // Remove special characters
		.trim()
		.replace(/\s+/g, '-') // Replace spaces with hyphens
		.replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
}

/**
 * Remark plugin to add IDs to headings and collect them for outline
 */
export default function rehypeHeadingIds() {
	return (tree: Node, file: any) => {
		const headings: Array<{
			level: number;
			text: string;
			id: string;
		}> = [];

		const usedIds = new Set<string>();

		visit(tree, 'heading', (node: any) => {
			// Only process H2 and H3
			if (node.depth < 2 || node.depth > 3) {
				return;
			}

			const text = toString(node);
			let id = generateId(text);

			// Handle duplicate IDs by appending a number
			if (usedIds.has(id)) {
				let counter = 1;
				let newId = `${id}-${counter}`;
				while (usedIds.has(newId)) {
					counter++;
					newId = `${id}-${counter}`;
				}
				id = newId;
			}

			usedIds.add(id);

			// Add ID to heading
			if (!node.data) {
				node.data = {};
			}
			if (!node.data.hProperties) {
				node.data.hProperties = {};
			}
			node.data.hProperties.id = id;

			// Collect heading for outline
			headings.push({
				level: node.depth,
				text,
				id,
			});
		});

		// Store headings in frontmatter for access in layout
		if (!file.data.frontmatter) {
			file.data.frontmatter = {};
		}
		file.data.frontmatter.headings = headings;
	};
}

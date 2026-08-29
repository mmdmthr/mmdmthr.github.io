import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog/en', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		// New fields for content organization
		tags: z.union([
			z.array(z.string()),
			z.string().transform((val) => [val]),
		]).optional(),
		category: z.enum(['Build', 'Understand', 'Think']).optional(),
		featured: z.boolean().optional(),
		draft: z.boolean().optional(),
		// Series support
		series: z.object({
			name: z.string(),
			part: z.number(),
		}).optional(),
	}),
});

const blogId = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog/id', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		// New fields for content organization
		tags: z.union([
			z.array(z.string()),
			z.string().transform((val) => [val]),
		]).optional(),
		category: z.enum(['Build', 'Understand', 'Think']).optional(),
		featured: z.boolean().optional(),
		draft: z.boolean().optional(),
		// Series support
		series: z.object({
			name: z.string(),
			part: z.number(),
		}).optional(),
	}),
});

export const collections = { blog, blogId };

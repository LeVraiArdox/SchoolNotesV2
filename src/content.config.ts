import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const cours = defineCollection({
	// Load Markdown and MDX files in the `src/content/cours/` directory.
	loader: glob({ base: './src/content/cours', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tag: z.string(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { cours };

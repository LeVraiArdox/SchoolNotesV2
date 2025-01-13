// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from "remark-math";
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		syntaxHighlight: "shiki",
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	  },
	
});

// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
    site: 'https://mmdmthr.github.io',
    integrations: [
        mdx(),
        sitemap(),
        partytown({
        config: {
            forward: ["dataLayer.push"],
        },
		}),
        react(),
        tailwind(),
        pagefind()
    ],
    output: 'static',
});

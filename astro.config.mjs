// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown'
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import pagefind from 'astro-pagefind';
import rehypeHeadingIds from './src/utils/rehypeHeadingIds.ts';

// https://astro.build/config
export default defineConfig({
    site: 'https://mmdmthr.github.io',
    integrations: [
        mdx({
            remarkPlugins: [rehypeHeadingIds],
        }),
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

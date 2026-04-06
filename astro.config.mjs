// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown'
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
    site: 'https://mmdmthr.github.io',
    integrations: [
        mdx(),
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

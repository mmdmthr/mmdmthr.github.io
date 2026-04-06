import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
	const posts = await getCollection('blog');
	const base = site!.toString().replace(/\/$/, '');

	const staticPages = [
		{ url: `${base}/`, lastmod: null },
		{ url: `${base}/blog/`, lastmod: null },
		{ url: `${base}/about/`, lastmod: null },
	];

	const postPages = posts.map((post) => ({
		url: `${base}/blog/${post.id}/`,
		lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().split('T')[0],
	}));

	const allPages = [...staticPages, ...postPages];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		(page) =>
			`  <url>\n    <loc>${page.url}</loc>${page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : ''}\n  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml' },
	});
};

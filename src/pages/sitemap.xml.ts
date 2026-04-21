import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import photos from '../photos';

export const GET: APIRoute = async ({ site }) => {
	const posts = await getCollection('blog');
	const base = site!.toString().replace(/\/$/, '');

	const staticPages = [
		{ url: `${base}/`, lastmod: null, images: [] },
		{ url: `${base}/blog/`, lastmod: null, images: [] },
		{ url: `${base}/about/`, lastmod: null, images: [] },
		{
			url: `${base}/gallery/`,
			lastmod: null,
			images: photos.map((photo) => ({
				loc: `${base}${photo.src}`,
				title: photo.alt,
			})),
		},
	];

	const postPages = posts.map((post) => ({
		url: `${base}/blog/${post.id}/`,
		lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().split('T')[0],
		images: [],
	}));

	const allPages = [...staticPages, ...postPages];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages
	.map((page) => {
		const imageXml = page.images.map(
			(img) =>
				`    <image:image>\n      <image:loc>${img.loc}</image:loc>\n      <image:title>${img.title}</image:title>\n    </image:image>`
		).join('\n');
		return `  <url>\n    <loc>${page.url}</loc>${page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : ''}${imageXml ? `\n${imageXml}` : ''}\n  </url>`;
	})
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml' },
	});
};

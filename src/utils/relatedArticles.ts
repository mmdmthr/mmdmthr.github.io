import type { CollectionEntry } from 'astro:content';

type BlogPost = CollectionEntry<'blog'>;

interface RelatedArticles {
	sameSeries: BlogPost[];
	sharedTags: BlogPost[];
	sameCategory: BlogPost[];
	recent: BlogPost[];
}

/**
 * Find related articles based on various criteria
 */
export function findRelatedArticles(
	currentPost: BlogPost,
	allPosts: BlogPost[],
	limit: number = 3
): BlogPost[] {
	const related: RelatedArticles = {
		sameSeries: [],
		sharedTags: [],
		sameCategory: [],
		recent: [],
	};

	const filteredPosts = allPosts.filter((post) => post.id !== currentPost.id);

	// Find posts from same series
	if (currentPost.data.series?.name) {
		related.sameSeries = filteredPosts
			.filter((post) => post.data.series?.name === currentPost.data.series?.name)
			.sort((a, b) => (a.data.series?.part || 0) - (b.data.series?.part || 0));
	}

	// Find posts with shared tags
	if (currentPost.data.tags && currentPost.data.tags.length > 0) {
		const tagSet = new Set(currentPost.data.tags);
		related.sharedTags = filteredPosts
			.filter((post) => post.data.tags && post.data.tags.some((tag) => tagSet.has(tag)))
			.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
			.slice(0, limit);
	}

	// Find posts from same category
	if (currentPost.data.category) {
		related.sameCategory = filteredPosts
			.filter((post) => post.data.category === currentPost.data.category)
			.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
			.slice(0, limit);
	}

	// Get recent posts as fallback
	related.recent = filteredPosts
		.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
		.slice(0, limit);

	// Combine results, prioritizing same series, then shared tags, then category, then recent
	// Remove duplicates
	const seenIds = new Set<string>();
	const relatedList: BlogPost[] = [];

	const allRelated = [
		...related.sameSeries,
		...related.sharedTags,
		...related.sameCategory,
		...related.recent,
	];

	for (const post of allRelated) {
		if (!seenIds.has(post.id)) {
			relatedList.push(post);
			seenIds.add(post.id);
			if (relatedList.length >= limit) break;
		}
	}

	return relatedList;
}

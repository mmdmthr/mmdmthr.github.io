import React, { useState, useEffect } from 'react';

interface Heading {
	level: number;
	text: string;
	id: string;
}

interface ArticleOutlineProps {
	articleSelector?: string;
}

export default function ArticleOutline({ articleSelector = 'article.blog-post' }: ArticleOutlineProps) {
	const [headings, setHeadings] = useState<Heading[]>([]);
	const [activeId, setActiveId] = useState<string>('');
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		// Extract headings from the article
		const article = document.querySelector(articleSelector);
		if (!article) return;

		const headingElements = article.querySelectorAll('h2, h3');
		const extractedHeadings: Heading[] = [];

		headingElements.forEach((element) => {
			const text = element.textContent || '';
			const id = element.id;

			if (text && id) {
				extractedHeadings.push({
					level: parseInt(element.tagName[1]),
					text,
					id,
				});
			}
		});

		setHeadings(extractedHeadings);
	}, [articleSelector]);

	// Set up intersection observer for active section tracking
	useEffect(() => {
		if (headings.length === 0) return;

		const options = {
			rootMargin: '-80px 0px -66% 0px', // Adjust for header height
		};

		const callback = (entries: IntersectionObserverEntry[]) => {
			// Find the entry that's most visible
			const visibleEntry = entries.find((entry) => entry.isIntersecting);
			if (visibleEntry) {
				setActiveId(visibleEntry.target.id);
			}
		};

		const observer = new IntersectionObserver(callback, options);

		// Observe all headings
		headings.forEach((heading) => {
			const element = document.getElementById(heading.id);
			if (element) {
				observer.observe(element);
			}
		});

		return () => observer.disconnect();
	}, [headings]);

	if (headings.length < 3) {
		// Don't show outline if there are too few headings
		return null;
	}

	return (
		<>
			<nav className="hidden md:block sticky top-24 max-h-[calc(100vh-96px)] overflow-y-auto">
				<p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-4 tracking-wide">
					On this page
				</p>
				<TableOfContents headings={headings} activeId={activeId} />
			</nav>
		</>
	);
}

function TableOfContents({
	headings,
	activeId,
	onLinkClick,
}: {
	headings: Heading[];
	activeId: string;
	onLinkClick?: () => void;
}) {
	return (
		<ul className="space-y-2">
			{headings.map((heading) => {
				const isActive = heading.id === activeId;
				const isH3 = heading.level === 3;

				return (
					<li key={heading.id} className={isH3 ? 'ml-4' : ''}>
						<a
							href={`#${heading.id}`}
							onClick={(e) => {
								e.preventDefault();
								const element = document.getElementById(heading.id);
								if (element) {
									element.scrollIntoView({ behavior: 'smooth' });
									// Update URL without page reload
									window.history.pushState(null, '', `#${heading.id}`);
								}
								onLinkClick?.();
							}}
							className={`
								block text-sm transition-colors duration-200 py-1
								${
									isActive
										? 'text-primary-600 dark:text-primary-400 font-medium'
										: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
								}
							`}
						>
							{heading.text}
						</a>
					</li>
				);
			})}
		</ul>
	);
}

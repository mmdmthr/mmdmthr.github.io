import { useEffect, useRef, useState } from 'react';
import FormattedDate from './FormattedDate';

export default function SearchBar({ baseUrl = '/blog' }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [pagefind, setPagefind] = useState(null);
  const searchTimeoutRef = useRef();

  useEffect(() => {
    const loadPagefind = async () => {
      const dynamicImport = new Function('specifier', 'return import(specifier)');
      const module = await dynamicImport('/pagefind/pagefind.js');
      setPagefind(module);
    };

    loadPagefind();
  }, []);

  useEffect(() => {
    if (!pagefind) return;

    const loadAll = async () => {
      const search = await pagefind.search(null);
      const results = await Promise.all(search.results.map((r) => r.data()));
      setSearchResults(results);
    };

    loadAll();
  }, [pagefind]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = window.setTimeout(async () => {
      if (!pagefind) return;

      const search = searchTerm.trim()
        ? await pagefind.search(searchTerm)
        : await pagefind.search(null);

      const results = await Promise.all(search.results.map((r) => r.data()));
      setSearchResults(results);
    }, 250);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Search Input */}
      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="search"
            value={query}
            onChange={handleSearch}
            placeholder="Search blog posts..."
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
          />
        </div>
        {query && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {searchResults.length} post{searchResults.length !== 1 ? 's' : ''} found
          </p>
        )}
      </div>

      {/* Search Results */}
      <div className="space-y-6">
        {searchResults.map((result) => (
          <article key={result.url} className="group border-b border-gray-200 dark:border-gray-800 pb-6 last:border-b-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h2 className="text-lg font-medium">
                <a 
                  href={result.url}
                  className="text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 group-hover:text-primary-600 dark:group-hover:text-primary-400"
                >
                  {result.meta.title}
                </a>
              </h2>
              {result.meta?.pubDate && !Number.isNaN(new Date(result.meta.pubDate).valueOf()) && (
                <time className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                  <FormattedDate date={result.meta.pubDate} />
                </time>
              )}
            </div>
            
            {(result.excerpt || result.meta.description) && (
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {result.excerpt || result.meta.description}
              </p>
            )}
          </article>
        ))}
        
        {searchResults.length === 0 && query && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No posts found matching "{query}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
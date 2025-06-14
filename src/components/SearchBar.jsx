import { useEffect, useState } from 'react';
import FormattedDate from './FormattedDate';
import '../styles/search-bar.css'

export default function SearchBar({ posts }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(posts);
  }, [posts]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);
    const results = posts.filter((post) => post.data.title.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={handleSearch}
        placeholder="Search blog posts..."
        className='search-input'
      />
      <ul>
        {searchResults.map((post) => (
          <li key={post.id}>
            <a href={`/blog-id/${post.id}/`}>
              <b className="title">{post.data.title}</b>
              <p className="date">
                <FormattedDate date={post.data.pubDate} />
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
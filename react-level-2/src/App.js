import { useEffect, useState } from 'react'

const App = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500); // only fetch on debounced search
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (debouncedSearch) {
      fetch(`https://api.github.com/search/users?q=${debouncedSearch}`)
        .then(response => response.json())
        .then(result => setSearchResult(result.items ? result.items : []));
    } else {
      // if search is blank, no need to fetch
      setSearchResult([]);
    }
  }, [debouncedSearch]);

  return (
    <div>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
      {searchResult.map(RenderUser)}
    </div>
  );
}

export default App;

const RenderUser = ({ login, html_url }) => (
  <div key={login} style={{ display: 'flex', flexDirection: 'column', marginTop: '1em' }}>
    <span style={{ fontWeight: 'bold' }}>{login}</span>
    <a href={html_url} target="_blank" rel='noopener noreferrer'>{html_url}</a>
  </div>
)

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

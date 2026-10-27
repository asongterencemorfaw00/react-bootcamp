// MODULE 04 — SOLUTION
import { useState, useEffect } from 'react';

interface Country {
  name: { common: string };
  flags: { emoji: string };
  population: number;
}

function App() {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query.length < 2) { setCountries([]); return; }

    const controller = new AbortController();
    let timeoutId: ReturnType<typeof setTimeout>;

    // Debounce: wait 400ms before fetching
    timeoutId = setTimeout(() => {
      setLoading(true);
      setError(null);

      fetch(`https://restcountries.com/v3.1/name/${query}?fields=name,flags,population`, {
        signal: controller.signal
      })
        .then(r => { if (!r.ok) throw new Error('Not found'); return r.json(); })
        .then(data => { setCountries(data); setLoading(false); })
        .catch(err => {
          if (err.name !== 'AbortError') {
            setError('No countries found');
            setCountries([]);
            setLoading(false);
          }
        });
    }, 400);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [query]);

  return (
    <div className="container">
      <h1>🌍 Country Search</h1>
      <input type="text" placeholder="Search countries..." value={query}
        onChange={e => setQuery(e.target.value)} className="search-input" />
      {loading && <p className="status">Searching...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && countries.length === 0 && query.length >= 2 && !error && (
        <p className="status">No results found</p>
      )}
      <div className="results">
        {countries.map(c => (
          <div key={c.name.common} className="country-card">
            <span className="flag">{c.flags.emoji}</span>
            <div>
              <h3>{c.name.common}</h3>
              <p>Pop: {c.population.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;

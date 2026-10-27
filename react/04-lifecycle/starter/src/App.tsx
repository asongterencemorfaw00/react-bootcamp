// MODULE 04 — Lifecycle & Effects
// =================================
// Build a live country search with these features:
//
// STEP 1: Create a search input (controlled) — updates 'query' state
//
// STEP 2: Use useEffect to fetch countries when query changes
//         API: https://restcountries.com/v3.1/name/{query}?fields=name,flags,population
//         Only fetch if query.length >= 2
//
// STEP 3: Show a loading spinner while fetching
//
// STEP 4: Show an error message if the fetch fails
//
// STEP 5: Add cleanup with AbortController to prevent race conditions
//         (fetch the previous request if query changes quickly)
//
// STEP 6: Add a debounce — only fetch 400ms after the user stops typing
//         HINT: Use setTimeout in useEffect, clear it in cleanup
//
// STRETCH: Show "No results found" if the API returns an empty array

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

  // TODO: Add useEffect for fetching with debounce + AbortController

  return (
    <div className="container">
      <h1>🌍 Country Search</h1>
      <input
        type="text"
        placeholder="Search countries..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="search-input"
      />
      {loading && <p className="status">Searching...</p>}
      {error && <p className="error">{error}</p>}
      <div className="results">
        {/* TODO: Render country cards */}
      </div>
    </div>
  );
}

export default App;

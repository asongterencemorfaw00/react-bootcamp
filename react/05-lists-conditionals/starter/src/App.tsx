// MODULE 05 — Lists & Conditionals
// ==================================
// Build a filterable, sortable product list.
//
// STEP 1: Render all products as a list of cards
//
// STEP 2: Add category filter buttons: All | Electronics | Clothing | Home | Books
//         Clicking a button filters the visible products
//
// STEP 3: Add a sort dropdown: Price ↑ | Price ↓ | Name A-Z
//         Sorting should work alongside filtering
//
// STEP 4: Show a count: "Showing X of Y products"
//
// STEP 5: Show an "No products match your filter" empty state
//         when filters produce zero results
//
// STEP 6: Show an "Out of stock" overlay on product cards where inStock is false
//
// STRETCH: Add a text search input that filters by name in real time

import { useState } from 'react';

interface Product {
  id: number; name: string; price: number;
  category: string; inStock: boolean; emoji: string;
}

const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 49.99, category: 'Electronics', inStock: true,  emoji: '🎧' },
  { id: 2, name: 'Running Shoes',       price: 89.99, category: 'Clothing',     inStock: true,  emoji: '👟' },
  { id: 3, name: 'Coffee Maker',        price: 34.99, category: 'Home',         inStock: false, emoji: '☕' },
  { id: 4, name: 'JavaScript Book',    price: 24.99, category: 'Books',        inStock: true,  emoji: '📚' },
  { id: 5, name: 'Smart Speaker',      price: 79.99, category: 'Electronics', inStock: true,  emoji: '🔊' },
  { id: 6, name: 'Yoga Mat',           price: 29.99, category: 'Clothing',     inStock: false, emoji: '🧘' },
];

const categories = ['All', 'Electronics', 'Clothing', 'Home', 'Books'];

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('price-asc');

  // TODO: Compute 'visible' from products using filter + sort
  const visible = products;

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="controls">
        <div className="filters">
          {/* TODO: Render category filter buttons */}
        </div>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>
      <p className="count">Showing {visible.length} of {products.length} products</p>
      {visible.length === 0 && <p className="empty">No products match your filter</p>}
      <div className="grid">
        {/* TODO: Render visible products */}
      </div>
    </div>
  );
}

export default App;

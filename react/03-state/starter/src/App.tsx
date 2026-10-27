// MODULE 03 — State & Hooks
// ==========================
// Build a shopping cart with the following features:
//
// DATA: Use the products array below as your catalogue.
//
// STEP 1: Create a cart state — an array of CartItem objects
//         CartItem = { id, name, price, emoji, quantity }
//
// STEP 2: addToCart(product) — if item exists, increment qty; else add new
//
// STEP 3: removeFromCart(id) — remove item from cart array
//
// STEP 4: updateQuantity(id, qty) — update item quantity
//         If qty reaches 0, remove the item
//
// STEP 5: Show the cart total (sum of price * quantity) as derived state
//         HINT: use .reduce() — do NOT store total in useState
//
// STEP 6: Show item count badge in the header (sum of all quantities)
//
// STRETCH: Add a "Clear cart" button that empties the cart
//          Add a "Max 5" limit per item

import { useState } from 'react';

interface Product {
  id: number; name: string; price: number; emoji: string;
}
interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  { id: 1, name: 'Headphones',  price: 49.99, emoji: '🎧' },
  { id: 2, name: 'Running Shoes', price: 89.99, emoji: '👟' },
  { id: 3, name: 'Coffee Maker', price: 34.99, emoji: '☕' },
  { id: 4, name: 'JS Book',     price: 24.99, emoji: '📚' },
];

function App() {
  // TODO: Add cart state here
  const cart: CartItem[] = [];

  // TODO: Implement these functions
  const addToCart = (product: Product) => { console.log('add', product); };
  const removeFromCart = (id: number) => { console.log('remove', id); };
  const updateQuantity = (id: number, qty: number) => { console.log('qty', id, qty); };

  // TODO: Calculate total as derived state (not useState)
  const total = 0;
  const itemCount = 0;

  return (
    <div className="container">
      <h1>🛒 Cart ({itemCount})</h1>
      <div className="layout">
        <div className="products">
          <h2>Products</h2>
          {/* TODO: Render product cards with Add to Cart buttons */}
        </div>
        <div className="cart">
          <h2>Your Cart</h2>
          {cart.length === 0 && <p className="empty">Your cart is empty</p>}
          {/* TODO: Render cart items with quantity controls */}
          <div className="total">Total: £{total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default App;

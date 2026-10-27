// MODULE 03 — SOLUTION
import { useState } from 'react';

interface Product { id: number; name: string; price: number; emoji: string; }
interface CartItem extends Product { quantity: number; }

const products: Product[] = [
  { id: 1, name: 'Headphones',  price: 49.99, emoji: '🎧' },
  { id: 2, name: 'Running Shoes', price: 89.99, emoji: '👟' },
  { id: 3, name: 'Coffee Maker', price: 34.99, emoji: '☕' },
  { id: 4, name: 'JS Book',     price: 24.99, emoji: '📚' },
];

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: Math.min(i.quantity + 1, 5) } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) =>
    setCart(prev => prev.filter(i => i.id !== id));

  const updateQuantity = (id: number, qty: number) => {
    if (qty === 0) { removeFromCart(id); return; }
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  // Derived state — calculated, not stored
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="container">
      <h1>🛒 Cart ({itemCount})</h1>
      <div className="layout">
        <div className="products">
          <h2>Products</h2>
          {products.map(p => (
            <div key={p.id} className="product-row">
              <span>{p.emoji} {p.name}</span>
              <span>£{p.price}</span>
              <button onClick={() => addToCart(p)}>Add</button>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>Your Cart</h2>
          {cart.length === 0 && <p className="empty">Your cart is empty</p>}
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.emoji} {item.name}</span>
              <div className="qty-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <span>£{(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)}>✕</button>
            </div>
          ))}
          {cart.length > 0 && (
            <>
              <div className="total">Total: £{total.toFixed(2)}</div>
              <button className="clear" onClick={() => setCart([])}>Clear cart</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;

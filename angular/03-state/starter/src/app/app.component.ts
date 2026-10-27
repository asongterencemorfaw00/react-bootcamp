// MODULE 03 — Angular State & Data Binding
// ==========================================
// Build the same shopping cart as React Module 03 using Angular.
//
// STEP 1: Define Product and CartItem interfaces
// STEP 2: Create a 'cart' signal: cart = signal<CartItem[]>([])
// STEP 3: Create a 'total' computed signal
// STEP 4: Implement addToCart, removeFromCart, updateQuantity methods
// STEP 5: Use @for to render products and cart items in the template
// STEP 6: Use (click) bindings to call your methods

import { Component, signal, computed } from '@angular/core';

interface Product { id: number; name: string; price: number; emoji: string; }
interface CartItem extends Product { quantity: number; }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <h1>🛒 Cart ({{ itemCount() }})</h1>
      <div class="layout">
        <div class="products">
          <h2>Products</h2>
          <!-- TODO: Render products with Add buttons -->
        </div>
        <div class="cart">
          <h2>Your Cart</h2>
          @if (cart().length === 0) {
            <p class="empty">Your cart is empty</p>
          }
          <!-- TODO: Render cart items -->
          <div class="total">Total: £{{ total().toFixed(2) }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: Product[] = [
    { id: 1, name: 'Headphones',   price: 49.99, emoji: '🎧' },
    { id: 2, name: 'Running Shoes', price: 89.99, emoji: '👟' },
    { id: 3, name: 'Coffee Maker', price: 34.99, emoji: '☕' },
    { id: 4, name: 'JS Book',      price: 24.99, emoji: '📚' },
  ];

  // TODO: Create cart signal and computed values
  cart = signal<CartItem[]>([]);
  total = computed(() => 0); // TODO: calculate total
  itemCount = computed(() => 0); // TODO: calculate item count
}

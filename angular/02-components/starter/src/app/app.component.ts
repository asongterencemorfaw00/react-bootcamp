// MODULE 02 — Angular Components & @Input
// =========================================
// STEP 1: Create product-card.component.ts with @Input properties:
//         name, price, category, inStock, emoji
// STEP 2: Show @if (inStock) ... @else ... badge
// STEP 3: Create page-header.component.ts with @Input title and subtitle
// STEP 4: Import and use both in this component
// STEP 5: Use @for to render a card for each product

import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  emoji: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [], // add your components here
  template: `
    <div class="container">
      <!-- TODO: Add page header and product grid -->
      <p>TODO: Build the product catalogue</p>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: Product[] = [
    { id: 1, name: 'Wireless Headphones', price: 49.99, category: 'Electronics', inStock: true,  emoji: '🎧' },
    { id: 2, name: 'Running Shoes',       price: 89.99, category: 'Clothing',     inStock: true,  emoji: '👟' },
    { id: 3, name: 'Coffee Maker',        price: 34.99, category: 'Home',         inStock: false, emoji: '☕' },
    { id: 4, name: 'JavaScript Book',    price: 24.99, category: 'Books',        inStock: true,  emoji: '📚' },
  ];
}

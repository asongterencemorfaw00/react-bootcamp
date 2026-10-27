// MODULE 02 — SOLUTION
import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card.component';
import { PageHeaderComponent } from './page-header.component';

interface Product {
  id: number; name: string; price: number;
  category: string; inStock: boolean; emoji: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardComponent, PageHeaderComponent],
  template: `
    <div class="container">
      <app-page-header title="ShopSim Products" subtitle="Browse our catalogue" />
      <div class="grid">
        @for (product of products; track product.id) {
          <app-product-card
            [name]="product.name"
            [price]="product.price"
            [category]="product.category"
            [inStock]="product.inStock"
            [emoji]="product.emoji"
          />
        }
      </div>
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

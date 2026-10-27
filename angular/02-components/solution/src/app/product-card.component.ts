import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="card">
      <span class="emoji">{{ emoji }}</span>
      <span class="badge category">{{ category }}</span>
      <h3>{{ name }}</h3>
      <p class="price">{{ price | currency:'GBP' }}</p>
      @if (inStock) {
        <span class="badge in-stock">In stock</span>
      } @else {
        <span class="badge out-of-stock">Out of stock</span>
      }
    </div>
  `
})
export class ProductCardComponent {
  @Input() name = '';
  @Input() price = 0;
  @Input() category = '';
  @Input() inStock = true;
  @Input() emoji = '';
}

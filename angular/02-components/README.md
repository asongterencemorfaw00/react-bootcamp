# Module 02 — Components & @Input

## What you'll learn
- Creating child components
- Passing data with @Input()
- Optional inputs and default values
- Conditional rendering with @if
- Composing components

## Concept

### @Input — Angular's version of props
```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: `
    <div class="card">
      <span class="emoji">{{ emoji }}</span>
      <h3>{{ name }}</h3>
      <p class="price">£{{ price.toFixed(2) }}</p>
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
  @Input() emoji = '';
  @Input() inStock = true;
  @Input() category = '';
}
```

### Using child components
Parent must import the child in its `imports` array:
```ts
@Component({
  imports: [ProductCardComponent],  // ← required for standalone
  template: `
    <app-product-card
      [name]="product.name"
      [price]="product.price"
      [inStock]="product.inStock"
    />
  `
})
```

## Lab
Mirror the React lab: build a product catalogue with reusable Angular components.

## References
- [W3Schools Angular Components](https://www.w3schools.com/Angular/angular_components.asp)
- [W3Schools Angular Data Binding](https://www.w3schools.com/Angular/angular_data_binding.asp)

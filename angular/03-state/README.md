# Module 03 — State & Data Binding in Angular

## What you'll learn
- Class properties as component state
- Two-way binding with [(ngModel)]
- Event binding with (click)
- Angular Signals (reactive state, Angular 16+)
- Computed signals for derived values

## Concept

### Class properties as state
Unlike React's useState, Angular component state is just a class property.
Angular detects changes and updates the template automatically.

```ts
export class CartComponent {
  items: CartItem[] = [];

  addItem(product: Product) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      // Important: reassign to trigger change detection
      this.items = this.items.map(i =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      this.items = [...this.items, { ...product, quantity: 1 }];
    }
  }

  // Getter for derived value — no need to track separately
  get total() {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
}
```

### Angular Signals (modern approach)
```ts
import { signal, computed } from '@angular/core';

export class CartComponent {
  items = signal<CartItem[]>([]);

  // Computed automatically updates when items changes
  total = computed(() =>
    this.items().reduce((sum, i) => sum + i.price * i.quantity, 0)
  );

  addItem(product: Product) {
    this.items.update(prev => [...prev, { ...product, quantity: 1 }]);
  }
}
```

## Lab
Same shopping cart as React Module 03, built with Angular.

## References
- [W3Schools Angular Events](https://www.w3schools.com/Angular/angular_events.asp)
- [W3Schools Angular Signals](https://www.w3schools.com/Angular/angular_signals.asp)

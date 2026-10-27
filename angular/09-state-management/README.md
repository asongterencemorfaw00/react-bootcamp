# Module 09 — State Management in Angular

## What you'll learn
- Services as a single source of truth
- Angular Signals for reactive state
- The store pattern with signals
- NgRx basics (for complex apps)
- Component communication via services

## Concept

### Service as a store (Signals-based)
```ts
@Injectable({ providedIn: 'root' })
export class CartStore {
  private _items = signal<CartItem[]>([]);

  // Public read-only access
  readonly items = this._items.asReadonly();
  readonly total = computed(() =>
    this._items().reduce((sum, i) => sum + i.price * i.quantity, 0)
  );
  readonly count = computed(() =>
    this._items().reduce((sum, i) => sum + i.quantity, 0)
  );

  add(product: Product) {
    this._items.update(items => {
      const exists = items.find(i => i.id === product.id);
      if (exists) {
        return items.map(i => i.id === product.id
          ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...items, { ...product, quantity: 1 }];
    });
  }

  remove(id: number) {
    this._items.update(items => items.filter(i => i.id !== id));
  }

  clear() { this._items.set([]); }
}
```

### Injecting the store anywhere
```ts
export class NavbarComponent {
  // Inject the same singleton — shares state across the whole app
  cartStore = inject(CartStore);
  // Template: {{ cartStore.count() }}
}
```

## Lab
Refactor the shopping cart into a CartStore service using Signals.

## References
- [W3Schools Angular Signals](https://www.w3schools.com/Angular/angular_signals.asp)
- [W3Schools Angular State Management](https://www.w3schools.com/Angular/angular_state_management.asp)

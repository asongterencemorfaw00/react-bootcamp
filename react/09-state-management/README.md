# Module 09 — State Management

## What you'll learn
- When local state isn't enough
- Context API + useReducer (built-in)
- Pattern: Context for global state
- Introduction to Zustand (lightweight external library)
- Redux concepts and when to reach for it

## Concept

### useReducer — for complex state logic
```tsx
type Action =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'CLEAR_CART' };

function cartReducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.find(i => i.id === action.payload.id);
      if (exists) return state.map(i => i.id === action.payload.id
        ? { ...i, quantity: i.quantity + 1 } : i);
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case 'REMOVE_ITEM':
      return state.filter(i => i.id !== action.payload);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

// Usage
const [cart, dispatch] = useReducer(cartReducer, []);
dispatch({ type: 'ADD_ITEM', payload: product });
dispatch({ type: 'REMOVE_ITEM', payload: id });
```

### Context + useReducer (global cart)
```tsx
const CartContext = createContext<{
  cart: CartItem[];
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
};
```

### Zustand (when Context gets complex)
```tsx
import { create } from 'zustand';

interface CartStore {
  items: CartItem[];
  add: (product: Product) => void;
  remove: (id: number) => void;
  total: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  add: (product) => set(state => ({
    items: state.items.some(i => i.id === product.id)
      ? state.items.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
      : [...state.items, { ...product, quantity: 1 }]
  })),
  remove: (id) => set(state => ({ items: state.items.filter(i => i.id !== id) })),
  total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
}));
```

## Lab
Refactor the shopping cart to use Context + useReducer, then optionally migrate to Zustand.

## References
- [W3Schools React useContext](https://www.w3schools.com/react/react_usecontext.asp)
- [W3Schools React useReducer](https://www.w3schools.com/react/react_usereducer.asp)
- [Zustand Docs](https://zustand-demo.pmnd.rs/)

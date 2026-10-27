# Module 03 — State & Hooks

## What you'll learn
- useState — declaring and updating state
- Functional updater form
- Derived state (calculating values from state)
- Multiple state variables
- State with objects and arrays (immutability)
- Introduction to useReducer for complex state

## Concept

### useState
```tsx
const [count, setCount] = useState(0);

// Always use the setter — never mutate directly
setCount(count + 1);                  // simple update
setCount(prev => prev + 1);           // functional form (safer for async)

// Object state — spread to avoid losing other fields
const [user, setUser] = useState({ name: '', age: 0 });
setUser(prev => ({ ...prev, name: 'Alice' }));  // keeps age

// Array state — always return a new array
const [items, setItems] = useState<string[]>([]);
setItems(prev => [...prev, 'new item']);          // add
setItems(prev => prev.filter(i => i !== 'old')); // remove
```

### Derived state
Don't store things you can calculate:
```tsx
const [items, setItems] = useState<CartItem[]>([]);
// DON'T: const [total, setTotal] = useState(0); — keep in sync manually
// DO:
const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
```

## Lab
Build a shopping cart with add, remove, and quantity controls.

## References
- [W3Schools useState](https://www.w3schools.com/react/react_usestate.asp)
- [React Docs — State](https://react.dev/learn/state-a-components-memory)

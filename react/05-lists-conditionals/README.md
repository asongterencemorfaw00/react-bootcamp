# Module 05 — Lists & Conditionals

## What you'll learn
- Rendering lists with .map()
- The key prop and why it matters
- Conditional rendering patterns
- Filtering and sorting lists
- Empty states

## Concept

### Lists with .map()
```tsx
const items = ['Apple', 'Banana', 'Cherry'];

// Always provide a unique key
<ul>
  {items.map((item, index) => (
    <li key={item}>{item}</li>  // prefer stable ID over index
  ))}
</ul>
```

### Conditional rendering patterns
```tsx
// Pattern 1: && (short circuit)
{isLoggedIn && <UserMenu />}

// Pattern 2: ternary
{isLoading ? <Spinner /> : <Content />}

// Pattern 3: if/else before return
function Feed() {
  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (items.length === 0) return <EmptyState />;
  return <ItemList items={items} />;
}
```

### Filtering and sorting
```tsx
const [filter, setFilter] = useState('all');
const [sort, setSort] = useState<'price-asc' | 'price-desc'>('price-asc');

const visible = products
  .filter(p => filter === 'all' || p.category === filter)
  .sort((a, b) => sort === 'price-asc' ? a.price - b.price : b.price - a.price);

// Derive from state — no useEffect needed
```

## Lab
Build a filterable, sortable product list.

## References
- [W3Schools React Lists](https://www.w3schools.com/react/react_lists.asp)
- [W3Schools React Conditionals](https://www.w3schools.com/react/react_conditional_rendering.asp)

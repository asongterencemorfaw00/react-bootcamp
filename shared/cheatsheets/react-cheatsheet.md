# React Cheatsheet — ShopSim Training

## Components
```tsx
// Function component
function MyComponent({ name, count = 0 }: { name: string; count?: number }) {
  return <div>{name}: {count}</div>;
}

// Arrow function component  
const MyComponent = ({ title }: Props) => <h1>{title}</h1>;
```

## useState
```tsx
const [value, setValue] = useState(initial);
const [items, setItems] = useState<Item[]>([]);

// Update
setValue(newValue);
setValue(prev => prev + 1);              // functional form

// Object
setUser(prev => ({ ...prev, name: 'Alice' }));

// Array — add
setItems(prev => [...prev, newItem]);

// Array — remove
setItems(prev => prev.filter(i => i.id !== id));

// Array — update
setItems(prev => prev.map(i => i.id === id ? { ...i, done: true } : i));
```

## useEffect
```tsx
useEffect(() => { /* on every render */  });
useEffect(() => { /* on mount only */    }, []);
useEffect(() => { /* when dep changes */ }, [dep]);
useEffect(() => {
  // side effect
  return () => { /* cleanup */ };
}, [dep]);
```

## useRef
```tsx
const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus();    // DOM access

const count = useRef(0);
count.current += 1;           // mutable value (no re-render)
```

## useContext
```tsx
const MyCtx = createContext<Type | null>(null);

function Provider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(initial);
  return <MyCtx.Provider value={{ state, setState }}>{children}</MyCtx.Provider>;
}

const useMyCtx = () => {
  const ctx = useContext(MyCtx);
  if (!ctx) throw new Error('Must be inside Provider');
  return ctx;
};
```

## useReducer
```tsx
type Action = { type: 'ADD'; payload: Item } | { type: 'CLEAR' };

function reducer(state: Item[], action: Action): Item[] {
  switch (action.type) {
    case 'ADD': return [...state, action.payload];
    case 'CLEAR': return [];
    default: return state;
  }
}

const [state, dispatch] = useReducer(reducer, []);
dispatch({ type: 'ADD', payload: item });
```

## React Router v6
```tsx
// Setup
<BrowserRouter><App /></BrowserRouter>

// Routes
<Routes>
  <Route path="/"          element={<Home />} />
  <Route path="/items/:id" element={<Detail />} />
  <Route path="*"          element={<NotFound />} />
</Routes>

// Navigation
<Link to="/items/42">View</Link>
<NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>

// Hooks
const { id } = useParams<{ id: string }>();
const navigate = useNavigate();
navigate('/success');
navigate(-1);  // back
```

## Forms
```tsx
// Controlled input
const [value, setValue] = useState('');
<input value={value} onChange={e => setValue(e.target.value)} />

// Form submit
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // access state values
};

// Multiple inputs
const [form, setForm] = useState({ name: '', email: '' });
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
};
```

## JSX Quick Reference
```tsx
// Conditional
{condition && <Component />}
{condition ? <A /> : <B />}

// List
{items.map(item => <Item key={item.id} {...item} />)}

// Class
<div className="card active">
<div className={`card ${isActive ? 'active' : ''}`}>

// Style
<div style={{ color: 'red', fontSize: '16px' }}>

// Event
<button onClick={() => doSomething(id)}>Click</button>
<input onChange={e => setValue(e.target.value)} />
```

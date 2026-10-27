# Module 08 — HTTP & Services in React

## What you'll learn
- Fetching data with Axios
- Custom hooks for data fetching (useFetch)
- Error handling and loading states
- POST, PUT, DELETE requests
- Abstracting API calls into a service layer
- Handling authentication headers

## Concept

### Custom useFetch hook
```tsx
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    axios.get<T>(url, { signal: controller.signal })
      .then(res => { setData(res.data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
```

### Service layer pattern
```tsx
// api/productService.ts
const BASE = '/api/products';

export const productService = {
  getAll: () => axios.get<Product[]>(BASE),
  getById: (id: number) => axios.get<Product>(`${BASE}/${id}`),
  create: (p: Omit<Product, 'id'>) => axios.post<Product>(BASE, p),
  update: (id: number, p: Partial<Product>) => axios.put(`${BASE}/${id}`, p),
  delete: (id: number) => axios.delete(`${BASE}/${id}`),
};

// Usage in component
const { data } = useFetch('/api/products');
// or
const createProduct = async (form: FormData) => {
  const { data } = await productService.create(form);
  // handle response
};
```

## Lab
Connect your product list to a mock REST API using a service layer.

## References
- [W3Schools React useEffect](https://www.w3schools.com/react/react_useeffect.asp)

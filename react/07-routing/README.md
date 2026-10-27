# Module 07 — React Router v6

## What you'll learn
- Setting up BrowserRouter
- Defining routes with Routes and Route
- Link vs NavLink
- useParams — URL parameters
- useNavigate — programmatic navigation
- Nested routes and layouts
- Protected routes (auth guard pattern)

## Concept

### Basic setup
```tsx
// main.tsx
import { BrowserRouter } from 'react-router-dom';
<BrowserRouter><App /></BrowserRouter>

// App.tsx
import { Routes, Route } from 'react-router-dom';
<Routes>
  <Route path="/"              element={<Home />} />
  <Route path="/products"      element={<ProductList />} />
  <Route path="/products/:id"  element={<ProductDetail />} />
  <Route path="*"              element={<NotFound />} />
</Routes>
```

### useParams
```tsx
function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  // fetch product by id...
}
```

### Protected route pattern
```tsx
function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

<Route path="/account" element={<PrivateRoute><AccountPage /></PrivateRoute>} />
```

## Lab
Build a multi-page ShopSim app: Home, Product List, Product Detail, Cart, 404.

## References
- [W3Schools React Router](https://www.w3schools.com/react/react_router.asp)
- [React Router Docs](https://reactrouter.com/en/main)

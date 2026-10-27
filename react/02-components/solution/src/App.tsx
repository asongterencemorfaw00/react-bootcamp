// MODULE 02 — SOLUTION

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  emoji: string;
}

const products: Product[] = [
  { id: 1, name: "Wireless Headphones", price: 49.99, category: "Electronics", inStock: true,  emoji: "🎧" },
  { id: 2, name: "Running Shoes",       price: 89.99, category: "Clothing",     inStock: true,  emoji: "👟" },
  { id: 3, name: "Coffee Maker",        price: 34.99, category: "Home",         inStock: false, emoji: "☕" },
  { id: 4, name: "JavaScript Book",    price: 24.99, category: "Books",        inStock: true,  emoji: "📚" },
];

function CategoryBadge({ category }: { category: string }) {
  return <span className="badge category">{category}</span>;
}

function ProductCard({ name, price, category, inStock, emoji }: Product) {
  return (
    <div className="card">
      <span className="emoji">{emoji}</span>
      <CategoryBadge category={category} />
      <h3>{name}</h3>
      <p className="price">£{price.toFixed(2)}</p>
      <span className={`badge ${inStock ? 'in-stock' : 'out-of-stock'}`}>
        {inStock ? 'In stock' : 'Out of stock'}
      </span>
    </div>
  );
}

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid">
      {products.map(p => <ProductCard key={p.id} {...p} />)}
    </div>
  );
}

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <PageHeader title="ShopSim Products" subtitle="Browse our catalogue" />
      <ProductGrid products={products} />
    </div>
  );
}

export default App;

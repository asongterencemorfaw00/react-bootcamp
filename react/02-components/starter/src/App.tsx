// MODULE 02 — Components & Props
// ================================
// Build a product catalogue using reusable components.
//
// STEP 1: Create a ProductCard component that accepts:
//         - name: string
//         - price: number
//         - category: string
//         - inStock: boolean
//         - emoji: string (use an emoji as the product image)
//
// STEP 2: Show "Out of stock" badge when inStock is false
//         Show "In stock" badge (green) when inStock is true
//
// STEP 3: Create a ProductGrid component that accepts an array of
//         products and renders a ProductCard for each one
//
// STEP 4: Create a PageHeader component that accepts a title and subtitle
//
// STEP 5: In App, render:
//         PageHeader → ProductGrid (with at least 4 products)
//
// STRETCH: Add a CategoryBadge child component inside ProductCard
//          that shows the category with a coloured background

const products = [
  { id: 1, name: "Wireless Headphones", price: 49.99, category: "Electronics", inStock: true,  emoji: "🎧" },
  { id: 2, name: "Running Shoes",       price: 89.99, category: "Clothing",     inStock: true,  emoji: "👟" },
  { id: 3, name: "Coffee Maker",        price: 34.99, category: "Home",         inStock: false, emoji: "☕" },
  { id: 4, name: "JavaScript Book",    price: 24.99, category: "Books",        inStock: true,  emoji: "📚" },
];

function App() {
  return (
    <div className="container">
      {/* TODO: Add PageHeader and ProductGrid here */}
      <p>TODO: Build the product catalogue</p>
    </div>
  );
}

export default App;

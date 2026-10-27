# Module 02 — Components & Props

## What you'll learn
- Composing UIs from multiple components
- Passing data with props
- TypeScript interfaces for props
- The children prop
- Default prop values
- Conditional rendering with props

## Concept

### Props — the inputs to a component
Props are how parent components pass data to children.
Think of them like function arguments.

```tsx
interface UserCardProps {
  name: string;
  role: string;
  isPremium?: boolean;   // ? = optional
}

function UserCard({ name, role, isPremium = false }: UserCardProps) {
  return (
    <div className={isPremium ? 'card premium' : 'card'}>
      <h2>{name}</h2>
      <p>{role}</p>
      {isPremium && <span>⭐ Premium member</span>}
    </div>
  );
}

// Usage
<UserCard name="Alice" role="Engineer" isPremium />
<UserCard name="Bob" role="Designer" />
```

### The children prop
```tsx
function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

<Card>
  <h2>Any content here</h2>
  <p>Goes into children</p>
</Card>
```

### Rules
- Props flow **down only** (parent → child)
- Never mutate props — they are read-only
- Use TypeScript interfaces to document prop shapes

## Lab
Build a product catalogue page with reusable ProductCard components.

## References
- [W3Schools React Props](https://www.w3schools.com/react/react_props.asp)
- [W3Schools Props Destructuring](https://www.w3schools.com/react/react_props_destructuring.asp)

# Module 06 — Forms

## What you'll learn
- Controlled vs uncontrolled inputs
- Form validation (real-time and on submit)
- Multiple input types: text, email, password, select, checkbox, radio
- Handling form submission
- Custom useForm hook pattern

## Concept

### Controlled input
```tsx
const [email, setEmail] = useState('');

<input
  type="email"
  value={email}
  onChange={e => setEmail(e.target.value)}
/>
```

### Validation pattern
```tsx
const [errors, setErrors] = useState<Record<string, string>>({});

const validate = () => {
  const newErrors: Record<string, string> = {};
  if (!email.includes('@')) newErrors.email = 'Must be a valid email';
  if (password.length < 8)  newErrors.password = 'Min 8 characters';
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0; // true if valid
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;
  // submit
};
```

### Multiple inputs — one handler
```tsx
const [form, setForm] = useState({ name: '', email: '', age: '' });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setForm(prev => ({ ...prev, [name]: value }));
};

<input name="name"  value={form.name}  onChange={handleChange} />
<input name="email" value={form.email} onChange={handleChange} />
```

## Lab
Build a multi-step checkout form with validation.

## References
- [W3Schools React Forms](https://www.w3schools.com/react/react_forms.asp)
- [W3Schools React Multiple Inputs](https://www.w3schools.com/react/react_forms_multiple_inputs.asp)

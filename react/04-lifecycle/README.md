# Module 04 — Lifecycle & Effects

## What you'll learn
- The three phases: Mount, Update, Unmount
- useEffect and when it runs
- The dependency array in depth
- Cleanup functions
- Avoiding race conditions with AbortController
- Common lifecycle bugs and fixes

## Concept

### useEffect dependency array
```tsx
useEffect(() => { ... });              // every render (avoid)
useEffect(() => { ... }, []);          // once on mount
useEffect(() => { ... }, [userId]);    // when userId changes
useEffect(() => {
  // runs when dep changes
  return () => { /* cleanup before next run or unmount */ };
}, [dep]);
```

### Race condition fix with AbortController
```tsx
useEffect(() => {
  const controller = new AbortController();

  fetch('/api/users/' + userId, { signal: controller.signal })
    .then(r => r.json())
    .then(setUser)
    .catch(err => {
      if (err.name !== 'AbortError') setError(err.message);
    });

  return () => controller.abort();  // cancel if userId changes first
}, [userId]);
```

### Stale closure bug
```tsx
// ✗ Bug: count is stale inside the timeout
useEffect(() => {
  setTimeout(() => setCount(count + 1), 1000); // count captured at 0
}, []);

// ✓ Fix: functional updater always sees latest
useEffect(() => {
  setTimeout(() => setCount(prev => prev + 1), 1000);
}, []);
```

## Lab
Build a live search component that fetches results from an API as the user types.

## References
- [W3Schools useEffect](https://www.w3schools.com/react/react_useeffect.asp)

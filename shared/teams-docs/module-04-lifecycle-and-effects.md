# Module 04 — Lifecycle & Effects

> **Teams doc** — read this before opening the GitHub repo  
> 🕒 Estimated time: 60–90 min  
> 📁 Repo: `react/04-...` and `angular/04-...`

---

## 🎯 Goal
Run code at specific points in a component's life

---

## 📖 Concepts

### React
- Mount → Update → Unmount phases
- useEffect with dependency array
- Cleanup functions (return () => ...)
- AbortController for fetch cancellation
- Debouncing with useEffect + setTimeout


### Angular
- ngOnInit — runs after first render
- ngOnDestroy — cleanup on removal
- ngOnChanges — runs when @Input changes
- effect() with Signals
- takeUntilDestroyed for observable cleanup


---

## ⚖️ React vs Angular — side by side

| Concept | React | Angular |
|---------|-------|---------|
| On mount | `useEffect(() => {}, [])` | `ngOnInit()` |
| On change | `useEffect(() => {}, [dep])` | `ngOnChanges()` or `effect()` |
| On unmount | Cleanup fn from useEffect | `ngOnDestroy()` |
| Cancel fetch | `AbortController` | RxJS `takeUntil` / `Subscription` |


---

## 🔗 Resources

| Topic | React | Angular |
|-------|-------|---------|
| W3Schools | [React Tutorial](https://www.w3schools.com/react/default.asp) | [Angular Tutorial](https://www.w3schools.com/Angular/default.asp) |
| Official docs | [react.dev](https://react.dev) | [angular.dev](https://angular.dev) |
| Repo starter | `react/04-*/starter/` | `angular/04-*/starter/` |
| Repo solution | `react/04-*/solution/` | `angular/04-*/solution/` |

---

## 🧪 Lab Brief

**Build a live country search with debouncing and request cancellation.**

### Setup
```bash
# React
cd react/04-*/starter
npm install && npm run dev

# Angular  
cd angular/04-*/starter
npm install && ng serve
```

### Definition of Done
- [ ] Fetches only when query >= 2 chars
- [ ] Shows loading state during fetch
- [ ] Cleans up in-flight requests on query change
- [ ] Debounces 400ms before fetching


---

## ⛔ Reminder
No AI tools during the lab. Work through it yourself first.  
Check `solution/` only after you've submitted your own attempt as a PR.

---

*ShopSim Developer Training — Module 04 of 09*

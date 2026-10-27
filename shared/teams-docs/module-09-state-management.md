# Module 09 — State Management

> **Teams doc** — read this before opening the GitHub repo  
> 🕒 Estimated time: 60–90 min  
> 📁 Repo: `react/09-...` and `angular/09-...`

---

## 🎯 Goal
Share state across many components without prop drilling

---

## 📖 Concepts

### React
- Context API — share state without props
- useReducer — complex state with actions
- Context + useReducer = lightweight Redux
- Custom useCart hook pattern
- Introduction to Zustand


### Angular
- Services as a single source of truth
- Signals-based store pattern
- `signal.asReadonly()` for public API
- `computed()` for derived state
- NgRx overview (enterprise scale)


---

## ⚖️ React vs Angular — side by side

| Concept | React | Angular |
|---------|-------|---------|
| Share state | Context + useReducer | Injectable Service + Signals |
| Update pattern | `dispatch({ type: 'ACTION' })` | `store.method()` |
| Derived state | `useMemo` or inline | `computed(() => ...)` |
| External lib | Zustand, Redux Toolkit | NgRx, Akita |


---

## 🔗 Resources

| Topic | React | Angular |
|-------|-------|---------|
| W3Schools | [React Tutorial](https://www.w3schools.com/react/default.asp) | [Angular Tutorial](https://www.w3schools.com/Angular/default.asp) |
| Official docs | [react.dev](https://react.dev) | [angular.dev](https://angular.dev) |
| Repo starter | `react/09-*/starter/` | `angular/09-*/starter/` |
| Repo solution | `react/09-*/solution/` | `angular/09-*/solution/` |

---

## 🧪 Lab Brief

**Refactor the shopping cart from Module 03 to use a global store. Cart persists across page navigation.**

### Setup
```bash
# React
cd react/09-*/starter
npm install && npm run dev

# Angular  
cd angular/09-*/starter
npm install && ng serve
```

### Definition of Done
- [ ] Cart count visible in navbar from any page
- [ ] Adding to cart on product page reflects in cart page
- [ ] No prop drilling — store injected where needed
- [ ] Cart total computed, not stored


---

## ⛔ Reminder
No AI tools during the lab. Work through it yourself first.  
Check `solution/` only after you've submitted your own attempt as a PR.

---

*ShopSim Developer Training — Module 09 of 09*

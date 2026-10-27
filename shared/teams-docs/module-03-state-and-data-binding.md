# Module 03 — State & Data Binding

> **Teams doc** — read this before opening the GitHub repo  
> 🕒 Estimated time: 60–90 min  
> 📁 Repo: `react/03-...` and `angular/03-...`

---

## 🎯 Goal
Make your UI respond to user interactions by managing state

---

## 📖 Concepts

### React
- useState — declare and update state
- Functional updater (prev => ...)
- Immutable array updates (spread, filter, map)
- Derived state — calculate from state, don't store separately
- useReducer for complex state


### Angular
- Class properties as state
- Two-way binding [(ngModel)]
- Event binding (click)="method()"
- Angular Signals — signal(), computed(), effect()
- Immutable updates in Angular


---

## ⚖️ React vs Angular — side by side

| Concept | React | Angular |
|---------|-------|---------|
| Declare state | `useState(initial)` | `signal(initial)` or class property |
| Update state | `setState(newVal)` | `signal.set(newVal)` or `signal.update()` |
| Derived value | Calculate inline or useMemo | `computed(() => ...)` |
| Two-way input | Controlled: `value + onChange` | `[(ngModel)]` |


---

## 🔗 Resources

| Topic | React | Angular |
|-------|-------|---------|
| W3Schools | [React Tutorial](https://www.w3schools.com/react/default.asp) | [Angular Tutorial](https://www.w3schools.com/Angular/default.asp) |
| Official docs | [react.dev](https://react.dev) | [angular.dev](https://angular.dev) |
| Repo starter | `react/03-*/starter/` | `angular/03-*/starter/` |
| Repo solution | `react/03-*/solution/` | `angular/03-*/solution/` |

---

## 🧪 Lab Brief

**Build a shopping cart: add, remove, update quantity, show running total.**

### Setup
```bash
# React
cd react/03-*/starter
npm install && npm run dev

# Angular  
cd angular/03-*/starter
npm install && ng serve
```

### Definition of Done
- [ ] Adding a product increments quantity if already in cart
- [ ] Total updates in real time without useState
- [ ] Delete removes item from the list
- [ ] Quantity cannot go below 1


---

## ⛔ Reminder
No AI tools during the lab. Work through it yourself first.  
Check `solution/` only after you've submitted your own attempt as a PR.

---

*ShopSim Developer Training — Module 03 of 09*

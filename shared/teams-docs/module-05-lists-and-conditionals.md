# Module 05 — Lists & Conditionals

> **Teams doc** — read this before opening the GitHub repo  
> 🕒 Estimated time: 60–90 min  
> 📁 Repo: `react/05-...` and `angular/05-...`

---

## 🎯 Goal
Render dynamic lists and show/hide content based on state

---

## 📖 Concepts

### React
- .map() to render lists
- The key prop (must be unique and stable)
- &&, ternary, early return patterns
- Filtering and sorting derived from state
- Empty state handling


### Angular
- @for loop (Angular 17+ control flow)
- track expression in @for
- @if / @else / @else if
- Pipes for formatting (currency, date, uppercase)
- Empty state with @empty block


---

## ⚖️ React vs Angular — side by side

| Concept | React | Angular |
|---------|-------|---------|
| Render list | `.map(item => <X key={id} />)` | `@for (item of items; track item.id) {}` |
| Conditional | `{cond && <X />}` | `@if (cond) { }` |
| Empty state | Manual check + JSX | `@empty { }` inside @for |
| Format value | Inline JS: `price.toFixed(2)` | Pipe: `price \| currency` |


---

## 🔗 Resources

| Topic | React | Angular |
|-------|-------|---------|
| W3Schools | [React Tutorial](https://www.w3schools.com/react/default.asp) | [Angular Tutorial](https://www.w3schools.com/Angular/default.asp) |
| Official docs | [react.dev](https://react.dev) | [angular.dev](https://angular.dev) |
| Repo starter | `react/05-*/starter/` | `angular/05-*/starter/` |
| Repo solution | `react/05-*/solution/` | `angular/05-*/solution/` |

---

## 🧪 Lab Brief

**Build a filterable, sortable product list with category buttons and sort dropdown.**

### Setup
```bash
# React
cd react/05-*/starter
npm install && npm run dev

# Angular  
cd angular/05-*/starter
npm install && ng serve
```

### Definition of Done
- [ ] Category filter works correctly
- [ ] Sort by price and name works
- [ ] Correct count displayed
- [ ] Empty state shown when no results


---

## ⛔ Reminder
No AI tools during the lab. Work through it yourself first.  
Check `solution/` only after you've submitted your own attempt as a PR.

---

*ShopSim Developer Training — Module 05 of 09*

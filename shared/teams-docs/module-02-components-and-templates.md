# Module 02 — Components & Templates

> **Teams doc** — read this before opening the GitHub repo  
> 🕒 Estimated time: 60–90 min  
> 📁 Repo: `react/02-...` and `angular/02-...`

---

## 🎯 Goal
Pass data between components and compose UIs from reusable pieces

---

## 📖 Concepts

### React
- Props — passing data to child components
- TypeScript interfaces for prop types
- Optional props with ? and default values
- The children prop
- Conditional rendering with &&


### Angular
- @Input() — Angular's equivalent of props
- Property binding [attr] — pass dynamic values
- Conditional with @if / @else
- Composing components via imports array
- ng-content — Angular's children equivalent


---

## ⚖️ React vs Angular — side by side

| Concept | React | Angular |
|---------|-------|---------|
| Pass data in | Props via function params | @Input() class properties |
| Optional input | `isPremium?: boolean` | `@Input() isPremium = false` |
| Conditional show | `{condition && <X />}` | `@if (condition) { <x /> }` |
| Children slot | `{children}` | `<ng-content />` |


---

## 🔗 Resources

| Topic | React | Angular |
|-------|-------|---------|
| W3Schools | [React Tutorial](https://www.w3schools.com/react/default.asp) | [Angular Tutorial](https://www.w3schools.com/Angular/default.asp) |
| Official docs | [react.dev](https://react.dev) | [angular.dev](https://angular.dev) |
| Repo starter | `react/02-*/starter/` | `angular/02-*/starter/` |
| Repo solution | `react/02-*/solution/` | `angular/02-*/solution/` |

---

## 🧪 Lab Brief

**Build a product catalogue with a ProductCard component, CategoryBadge, and PageHeader.**

### Setup
```bash
# React
cd react/02-*/starter
npm install && npm run dev

# Angular  
cd angular/02-*/starter
npm install && ng serve
```

### Definition of Done
- [ ] ProductCard accepts name, price, category, inStock, emoji as inputs
- [ ] In-stock badge changes colour based on inStock value
- [ ] At least 4 products rendered from an array
- [ ] CategoryBadge is a separate child component


---

## ⛔ Reminder
No AI tools during the lab. Work through it yourself first.  
Check `solution/` only after you've submitted your own attempt as a PR.

---

*ShopSim Developer Training — Module 02 of 09*

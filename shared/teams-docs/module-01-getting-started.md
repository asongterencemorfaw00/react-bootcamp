# Module 01 — Getting Started

> **Teams doc** — read this before opening the GitHub repo  
> 🕒 Estimated time: 60–90 min  
> 📁 Repo: `react/01-...` and `angular/01-...`

---

## 🎯 Goal
Set up a project and render your first component

---

## 📖 Concepts

### React
- JSX — writing HTML inside JavaScript
- createRoot — mounting React to the DOM
- Function components — a function that returns JSX
- Component naming rules (must start with capital letter)


### Angular
- @Component decorator — attaches template and styles to a class
- bootstrapApplication — mounts Angular to the DOM
- Template interpolation {{ }} — display class properties
- Standalone components (Angular 17+)


---

## ⚖️ React vs Angular — side by side

| Concept | React | Angular |
|---------|-------|---------|
| Data display | `{name}` in JSX | `{{ name }}` in template |
| Component type | Function | Class with decorator |
| Styling | `className=` | `class=` or `[class]=` |
| Entry point | `createRoot().render()` | `bootstrapApplication()` |


---

## 🔗 Resources

| Topic | React | Angular |
|-------|-------|---------|
| W3Schools | [React Tutorial](https://www.w3schools.com/react/default.asp) | [Angular Tutorial](https://www.w3schools.com/Angular/default.asp) |
| Official docs | [react.dev](https://react.dev) | [angular.dev](https://angular.dev) |
| Repo starter | `react/01-*/starter/` | `angular/01-*/starter/` |
| Repo solution | `react/01-*/solution/` | `angular/01-*/solution/` |

---

## 🧪 Lab Brief

**Build a profile page with a Header, ProfileCard, and Footer component. Use hardcoded data.**

### Setup
```bash
# React
cd react/01-*/starter
npm install && npm run dev

# Angular  
cd angular/01-*/starter
npm install && ng serve
```

### Definition of Done
- [ ] Header renders the app name
- [ ] ProfileCard shows name, job title, bio, and emoji avatar
- [ ] Footer renders copyright text
- [ ] No direct DOM manipulation used


---

## ⛔ Reminder
No AI tools during the lab. Work through it yourself first.  
Check `solution/` only after you've submitted your own attempt as a PR.

---

*ShopSim Developer Training — Module 01 of 09*

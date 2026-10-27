# Module 07 — Routing

> **Teams doc** — read this before opening the GitHub repo  
> 🕒 Estimated time: 60–90 min  
> 📁 Repo: `react/07-...` and `angular/07-...`

---

## 🎯 Goal
Build a multi-page app with client-side navigation

---

## 📖 Concepts

### React
- BrowserRouter wraps the app
- Routes and Route components
- Link vs NavLink
- useParams for URL params
- useNavigate for programmatic navigation
- Protected route pattern


### Angular
- Routes configuration array
- routerLink directive
- RouterOutlet — where components render
- ActivatedRoute for URL params
- Router.navigate() for programmatic nav
- Route guards (CanActivate)


---

## ⚖️ React vs Angular — side by side

| Concept | React | Angular |
|---------|-------|---------|
| Define routes | `<Route path='/x' element={<X />} />` | `{ path: 'x', component: X }` |
| Link | `<Link to='/x'>` | `<a routerLink='/x'>` |
| Active link | `<NavLink className={({isActive}) => ...}>` | `routerLinkActive='active'` |
| URL param | `useParams()` | `ActivatedRoute.params` |


---

## 🔗 Resources

| Topic | React | Angular |
|-------|-------|---------|
| W3Schools | [React Tutorial](https://www.w3schools.com/react/default.asp) | [Angular Tutorial](https://www.w3schools.com/Angular/default.asp) |
| Official docs | [react.dev](https://react.dev) | [angular.dev](https://angular.dev) |
| Repo starter | `react/07-*/starter/` | `angular/07-*/starter/` |
| Repo solution | `react/07-*/solution/` | `angular/07-*/solution/` |

---

## 🧪 Lab Brief

**Multi-page ShopSim app: Home, Product List, Product Detail (/products/:id), Cart, 404.**

### Setup
```bash
# React
cd react/07-*/starter
npm install && npm run dev

# Angular  
cd angular/07-*/starter
npm install && ng serve
```

### Definition of Done
- [ ] Navigating between pages doesn't reload the browser
- [ ] Product detail shows correct item from URL :id
- [ ] 404 page shown for unknown routes
- [ ] Active nav link highlighted


---

## ⛔ Reminder
No AI tools during the lab. Work through it yourself first.  
Check `solution/` only after you've submitted your own attempt as a PR.

---

*ShopSim Developer Training — Module 07 of 09*

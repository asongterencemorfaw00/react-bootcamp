# Module 08 — HTTP & Services

> **Teams doc** — read this before opening the GitHub repo  
> 🕒 Estimated time: 60–90 min  
> 📁 Repo: `react/08-...` and `angular/08-...`

---

## 🎯 Goal
Connect to a REST API and abstract HTTP logic into a service layer

---

## 📖 Concepts

### React
- Axios for HTTP requests
- Custom useFetch hook
- Service layer pattern (productService.ts)
- Loading / error / success state pattern
- Authentication headers with Axios interceptors


### Angular
- HttpClient — Angular's built-in HTTP module
- Injectable services
- RxJS Observables + subscribe
- pipe(map, catchError, tap)
- HTTP Interceptors for auth headers


---

## ⚖️ React vs Angular — side by side

| Concept | React | Angular |
|---------|-------|---------|
| HTTP library | Axios (third-party) | HttpClient (built-in) |
| Async pattern | Promise / async-await | Observable / subscribe |
| Error handling | try/catch or .catch() | `catchError` RxJS operator |
| Auth headers | Axios interceptors | HTTP Interceptors |


---

## 🔗 Resources

| Topic | React | Angular |
|-------|-------|---------|
| W3Schools | [React Tutorial](https://www.w3schools.com/react/default.asp) | [Angular Tutorial](https://www.w3schools.com/Angular/default.asp) |
| Official docs | [react.dev](https://react.dev) | [angular.dev](https://angular.dev) |
| Repo starter | `react/08-*/starter/` | `angular/08-*/starter/` |
| Repo solution | `react/08-*/solution/` | `angular/08-*/solution/` |

---

## 🧪 Lab Brief

**Connect the product list to a mock JSON API. Add CRUD: create, read, update, delete products.**

### Setup
```bash
# React
cd react/08-*/starter
npm install && npm run dev

# Angular  
cd angular/08-*/starter
npm install && ng serve
```

### Definition of Done
- [ ] Products load from API on mount
- [ ] Adding a product POSTs to the API
- [ ] Deleting sends DELETE request
- [ ] Error state shows if API call fails


---

## ⛔ Reminder
No AI tools during the lab. Work through it yourself first.  
Check `solution/` only after you've submitted your own attempt as a PR.

---

*ShopSim Developer Training — Module 08 of 09*

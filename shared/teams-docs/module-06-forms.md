# Module 06 — Forms

> **Teams doc** — read this before opening the GitHub repo  
> 🕒 Estimated time: 60–90 min  
> 📁 Repo: `react/06-...` and `angular/06-...`

---

## 🎯 Goal
Collect and validate user input

---

## 📖 Concepts

### React
- Controlled inputs — React owns the value
- Form submission with e.preventDefault()
- Inline validation and error display
- Multiple inputs with one handler (e.target.name)
- Custom useForm hook pattern


### Angular
- Template-driven forms (ngModel)
- Reactive forms (FormGroup, FormControl)
- Built-in validators (required, email, minLength)
- Accessing errors: control.errors?.['required']
- Form status: form.valid, form.touched


---

## ⚖️ React vs Angular — side by side

| Concept | React | Angular |
|---------|-------|---------|
| Form approach | Controlled state per input | FormGroup + FormControl |
| Validation | Manual JS function | Built-in Validators + custom |
| Submit | `onSubmit` handler | `(ngSubmit)="onSubmit()"` |
| Disable button | `disabled={!isValid}` | `[disabled]="form.invalid"` |


---

## 🔗 Resources

| Topic | React | Angular |
|-------|-------|---------|
| W3Schools | [React Tutorial](https://www.w3schools.com/react/default.asp) | [Angular Tutorial](https://www.w3schools.com/Angular/default.asp) |
| Official docs | [react.dev](https://react.dev) | [angular.dev](https://angular.dev) |
| Repo starter | `react/06-*/starter/` | `angular/06-*/starter/` |
| Repo solution | `react/06-*/solution/` | `angular/06-*/solution/` |

---

## 🧪 Lab Brief

**Build a multi-step checkout form: shipping → payment → review.**

### Setup
```bash
# React
cd react/06-*/starter
npm install && npm run dev

# Angular  
cd angular/06-*/starter
npm install && ng serve
```

### Definition of Done
- [ ] All fields validate on blur and submit
- [ ] Submit button disabled until form valid
- [ ] Error messages specific to each field
- [ ] Form summary shown on step 3


---

## ⛔ Reminder
No AI tools during the lab. Work through it yourself first.  
Check `solution/` only after you've submitted your own attempt as a PR.

---

*ShopSim Developer Training — Module 06 of 09*

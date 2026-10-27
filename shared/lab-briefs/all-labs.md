# All Lab Briefs — ShopSim Training

Quick reference for all 9 labs. Full details are in each module's Teams doc and repo README.

---

## Lab 01 — Profile Page (Getting Started)
**React & Angular** · 45 min · Individual

Build a static profile page with Header, ProfileCard, and Footer components.
No state, no props yet — just JSX/templates and component composition.

**DoD:** Three components render correctly · No direct DOM manipulation · Page looks presentable

---

## Lab 02 — Product Catalogue (Components & Props)
**React & Angular** · 60 min · Pairs

Build a product catalogue using reusable card components.
Parent passes product data down as props/@Input.

**DoD:** ProductCard accepts all required inputs · In-stock badge conditional · 4+ products from array · Child CategoryBadge component exists

---

## Lab 03 — Shopping Cart (State)
**React & Angular** · 60 min · Pairs

Build a shopping cart: add, remove, update quantity. Total is derived state.
This lab is the foundation for Labs 07–09.

**DoD:** Add increments quantity if already in cart · Total recalculates automatically · Delete removes item · Qty cannot go below 1

---

## Lab 04 — Country Search (Lifecycle & Effects)
**React & Angular** · 60 min · Pairs

Live search that fetches from the REST Countries API as the user types.
Includes debouncing (400ms) and AbortController / subscription cleanup.

**DoD:** Fetches only when query ≥ 2 chars · Loading state visible · Old requests cancelled on new keystroke · 400ms debounce

---

## Lab 05 — Product Filter (Lists & Conditionals)
**React & Angular** · 45 min · Pairs

Add filtering and sorting to the product catalogue from Lab 02.
All filtering is derived from state — no useEffect.

**DoD:** Category filter works · Sort by price/name works · Count accurate · Empty state shows when no results

---

## Lab 06 — Checkout Form (Forms)
**React & Angular** · 60 min · Pairs

Multi-step form: Shipping → Payment → Review.
Validation on each step before proceeding.

**DoD:** All fields validate on blur + submit · Submit disabled until valid · Step navigation works · Review shows entered data

---

## Lab 07 — Multi-page App (Routing)
**React & Angular** · 60 min · Pairs

Connect everything into a real multi-page app:
Home → Product List → Product Detail (/id) → Cart → 404.

**DoD:** Navigation doesn't reload the browser · Product detail loads by URL :id · 404 shown for unknown routes · Active nav link highlighted

---

## Lab 08 — API Integration (HTTP & Services)
**React & Angular** · 60 min · Pairs

Connect the product list to a mock JSON API (json-server or mock endpoint).
Implement full CRUD: load, add, edit, delete products.

**DoD:** Products load from API on mount · Add POSTs correctly · Delete sends DELETE · Error message on API failure

---

## Lab 09 — Global Cart Store (State Management)
**React & Angular** · 75 min · Pairs

Refactor the shopping cart into a global store (Context+useReducer / Injectable Service+Signals).
Cart count shows in the navbar. Cart persists across page navigation.

**DoD:** Cart count in navbar from any page · Adding on product page reflects in cart page · No prop drilling · Total is computed not stored

---

## Cumulative project — ShopSim Mini
**Both** · End of Week 2

Labs 02–09 combined into a working ShopSim clone:
Product listing → Product detail → Cart → Checkout form → Confirmation.
Uses the global store, real API calls, and full routing.

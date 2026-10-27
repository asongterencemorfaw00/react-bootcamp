# Module 07 — Angular Router

## What you'll learn
- RouterModule and route configuration
- routerLink directive
- RouterOutlet
- ActivatedRoute for URL params
- Route guards (CanActivate)
- Lazy loading

## Concept

### Route configuration
```ts
// app.routes.ts
import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '',              component: HomeComponent },
  { path: 'products',      component: ProductListComponent },
  { path: 'products/:id',  component: ProductDetailComponent },
  { path: 'account',       component: AccountComponent, canActivate: [authGuard] },
  { path: '**',            component: NotFoundComponent },
];
```

### RouterLink and RouterOutlet
```html
<nav>
  <a routerLink="/" routerLinkActive="active">Home</a>
  <a routerLink="/products" routerLinkActive="active">Products</a>
</nav>
<router-outlet />  <!-- route component renders here -->
```

### ActivatedRoute — reading URL params
```ts
import { ActivatedRoute } from '@angular/router';

export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadProduct(id);
    });
  }
}
```

## Lab
Same multi-page ShopSim app using Angular Router.

## References
- [W3Schools Angular Router](https://www.w3schools.com/Angular/angular_router.asp)

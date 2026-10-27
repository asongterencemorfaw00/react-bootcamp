# Angular Cheatsheet — ShopSim Training

## Component
```ts
@Component({
  selector: 'app-my',
  standalone: true,
  imports: [ChildComponent, NgIf],  // import what you use
  template: `<p>{{ title }}</p>`,
  styleUrl: './my.component.css'
})
export class MyComponent {
  title = 'Hello';
}
```

## @Input and @Output
```ts
// Child
@Input() name = '';
@Input() count = 0;
@Output() selected = new EventEmitter<string>();

// Parent template
<app-child [name]="user.name" [count]="5" (selected)="onSelected($event)" />
```

## Signals (Angular 16+)
```ts
import { signal, computed, effect } from '@angular/core';

count = signal(0);
doubled = computed(() => this.count() * 2);

// Read
this.count()
// Write
this.count.set(5);
this.count.update(prev => prev + 1);

// Side effect
effect(() => {
  console.log('count changed to', this.count());
});
```

## Template Syntax
```html
<!-- Interpolation -->
<p>{{ name }}</p>
<p>{{ price | currency:'GBP' }}</p>

<!-- Property binding -->
<img [src]="imageUrl" [alt]="name" />
<button [disabled]="form.invalid">Submit</button>

<!-- Event binding -->
<button (click)="add()">Add</button>
<input (input)="onInput($event)" />

<!-- Two-way binding (requires FormsModule) -->
<input [(ngModel)]="searchQuery" />

<!-- Control flow (Angular 17+) -->
@if (isLoggedIn) { <app-menu /> }
@else { <app-login /> }

@for (item of items; track item.id) {
  <app-item [data]="item" />
} @empty {
  <p>No items</p>
}

@switch (status) {
  @case ('loading') { <spinner /> }
  @case ('error') { <error /> }
  @default { <content /> }
}
```

## Angular Router
```ts
// app.routes.ts
export const routes: Routes = [
  { path: '',            component: HomeComponent },
  { path: 'products/:id', component: DetailComponent },
  { path: '**',          component: NotFoundComponent },
];

// main.ts
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
```

```html
<!-- Template -->
<a routerLink="/"         routerLinkActive="active">Home</a>
<a [routerLink]="['/products', id]">View Product</a>
<router-outlet />
```

```ts
// Component
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit() {
    this.route.params.subscribe(p => this.load(p['id']));
  }
  
  goBack() { this.router.navigate(['/products']); }
}
```

## HttpClient
```ts
// Provide in main.ts
providers: [provideHttpClient()]

// Service
@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}
  
  getAll() { return this.http.get<Product[]>('/api/products'); }
  getOne(id: number) { return this.http.get<Product>(`/api/products/${id}`); }
  create(p: Omit<Product,'id'>) { return this.http.post<Product>('/api/products', p); }
  update(id: number, p: Partial<Product>) { return this.http.put(`/api/products/${id}`, p); }
  delete(id: number) { return this.http.delete(`/api/products/${id}`); }
}

// Component
products = signal<Product[]>([]);
constructor(private svc: ProductService) {}
ngOnInit() {
  this.svc.getAll().subscribe(data => this.products.set(data));
}
```

## Reactive Forms
```ts
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

form = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  name:  new FormControl('', [Validators.required, Validators.minLength(2)]),
});

get email() { return this.form.get('email'); }
onSubmit() { if (this.form.valid) console.log(this.form.value); }
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input formControlName="email" />
  @if (email?.errors?.['required'] && email?.touched) {
    <span class="error">Required</span>
  }
  <button [disabled]="form.invalid">Submit</button>
</form>
```

## Pipes
```html
{{ name | uppercase }}
{{ price | currency:'GBP' }}
{{ date | date:'dd/MM/yyyy' }}
{{ items | slice:0:3 }}
{{ value | json }}
```

## Lifecycle Hooks
```ts
export class MyComponent implements OnInit, OnDestroy, OnChanges {
  ngOnInit()    { /* after first render  */ }
  ngOnDestroy() { /* before removal      */ }
  ngOnChanges(changes: SimpleChanges) { /* when @Input changes */ }
}
```

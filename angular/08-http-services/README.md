# Module 08 — HTTP Client & Services in Angular

## What you'll learn
- Injectable services
- HttpClient for GET, POST, PUT, DELETE
- RxJS Observables and operators (map, catchError, tap)
- Error handling with HttpErrorResponse
- HTTP Interceptors for auth headers

## Concept

### Injectable service
```ts
@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly API = '/api/products';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(this.API);
  }

  getById(id: number) {
    return this.http.get<Product>(`${this.API}/${id}`);
  }

  create(product: Omit<Product, 'id'>) {
    return this.http.post<Product>(this.API, product);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
```

### Using the service in a component
```ts
export class ProductListComponent implements OnInit {
  products = signal<Product[]>([]);
  loading = signal(false);

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loading.set(true);
    this.productService.getAll()
      .pipe(
        tap(() => this.loading.set(false)),
        catchError(err => {
          this.loading.set(false);
          return throwError(() => err);
        })
      )
      .subscribe(products => this.products.set(products));
  }
}
```

### HTTP Interceptor for auth
```ts
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
};
```

## Lab
Build a CRUD product manager connected to a mock JSON API.

## References
- [W3Schools Angular HTTP Client](https://www.w3schools.com/Angular/angular_http.asp)
- [W3Schools Angular Services](https://www.w3schools.com/Angular/angular_services.asp)

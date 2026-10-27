# React vs Angular — Quick Comparison

| Concept | React | Angular |
|---------|-------|---------|
| **Type** | UI Library | Full Framework |
| **Language** | JavaScript/TypeScript | TypeScript only |
| **Components** | Function components | Class + @Component |
| **State** | useState, useReducer | Class properties, Signals |
| **Side effects** | useEffect | ngOnInit, effect() |
| **Props in** | Function params | @Input() |
| **Events out** | Callback prop | @Output() EventEmitter |
| **Loops** | `.map()` in JSX | `@for` directive |
| **Conditionals** | `&&`, ternary | `@if / @else` |
| **Two-way bind** | value + onChange | [(ngModel)] |
| **Routing** | react-router-dom | @angular/router |
| **HTTP** | Axios (3rd party) | HttpClient (built-in) |
| **Forms** | Controlled state | Template / Reactive forms |
| **Shared state** | Context + useReducer | Injectable Services |
| **Styling** | className | class / [class] |
| **Children** | children prop | <ng-content> |
| **Refs** | useRef | @ViewChild |

## Mental model shift

### Coming from React to Angular
- Components are classes, not functions
- Templates are separate from logic (mostly)
- DI system — services are injected, not imported
- Observable streams (RxJS) instead of Promises
- Change detection — Angular watches for changes

### Coming from Angular to React
- No classes — just functions
- JSX mixes logic and markup intentionally
- No built-in DI — pass things explicitly or via Context
- Pull-based rendering — React decides when to re-render
- Smaller API surface — fewer built-in concepts to learn

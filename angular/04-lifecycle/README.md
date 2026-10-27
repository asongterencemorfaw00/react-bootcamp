# Module 04 — Lifecycle Hooks in Angular

## What you'll learn
- ngOnInit — runs once after component initialises
- ngOnDestroy — cleanup when component is removed  
- ngOnChanges — runs when @Input values change
- The effect() function (Signals-based side effects)
- takeUntilDestroyed for observable cleanup

## Concept

```ts
import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';

export class MyComponent implements OnInit, OnDestroy, OnChanges {
  @Input() userId!: number;

  ngOnInit() {
    // Runs once after first render
    // Good for: initial data fetch
    console.log('Component mounted');
  }

  ngOnChanges(changes: SimpleChanges) {
    // Runs when @Input values change
    if (changes['userId']) {
      console.log('userId changed to', this.userId);
      this.fetchUser();
    }
  }

  ngOnDestroy() {
    // Cleanup — cancel subscriptions, clear timers
    console.log('Component unmounted');
  }
}
```

### Using effect() with Signals
```ts
import { effect, signal } from '@angular/core';

export class SearchComponent {
  query = signal('');

  constructor() {
    effect(() => {
      const q = this.query(); // reactive — re-runs when query changes
      if (q.length >= 2) this.search(q);
    });
  }
}
```

## Lab
Same live country search, built with Angular lifecycle hooks.
